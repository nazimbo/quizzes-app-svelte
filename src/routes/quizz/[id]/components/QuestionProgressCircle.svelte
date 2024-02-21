<script lang="ts">
  export let isCorrect: boolean | null;
</script>

{#if isCorrect === null}
  <div class="bg-gray-300 w-4 h-4 rounded-full m-3" />
{:else if isCorrect}
  <div class="bg-green-300 w-4 h-4 rounded-full m-3" />
{:else}
  <div class="bg-red-300 w-4 h-4 rounded-full m-3" />
{/if}
