<script>
  import { crossfade } from 'svelte/transition';
   import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  let isExpanded = false;

const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;
      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      };
    }
  });
  
  const toggleExpand = () => {
    isExpanded = !isExpanded;
  };
</script>

<div class="relative border p-4">
  <div class="flex justify-between items-center">
      {#if isExpanded}
        <div out:send="{{ key: isExpanded }}" in:receive="{{ key: isExpanded }}">
	
      </div>
      {:else}
      <div class="">
             hiding
      </div>
    {/if}
    <button 
      class="" 
      on:click={toggleExpand}
    >
      {isExpanded ? '-' : '+'}
    </button>
  </div>
</div>
