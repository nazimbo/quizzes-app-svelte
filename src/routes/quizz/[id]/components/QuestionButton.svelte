<script lang="ts">
  export let handleSubmit: () => void;
  export let handleNext: () => void;
  export let showCorrectAnswer: boolean;
</script>

<div class="text-center">
  {#if showCorrectAnswer}
    <button on:click={handleNext} class="bg-blue-500 text-white font-bold p-4 px-16 rounded"> Next </button>
  {:else}
    <button on:click={handleSubmit} class="bg-blue-500 text-white font-bold p-4 px-16 rounded"> Submit </button>
  {/if}
</div>
