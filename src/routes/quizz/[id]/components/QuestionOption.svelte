<script lang="ts">
  export let option: { label: string; text: string };
  export let selectedOption: null | string;
  export let handleClickOption: (label: string) => void;
  export let showCorrectAnswer: boolean;
  export let answer: string;
</script>

<div
  on:click={() => handleClickOption(option.label)}
  class={`bg-gray-200 rounded w-[49%] text-center p-2 mb-4 py-5 cursor-pointer 
  ${option.label === selectedOption ? "bg-yellow-300" : null} 
  ${showCorrectAnswer && (answer === option.label ? "bg-green-300" : "bg-red-300")}`}
>
  <p>{option.text}</p>
</div>
