<script lang="ts">
  import QuestionText from "./components/QuestionText.svelte";
  import QuestionOption from "./components/QuestionOption.svelte";

  export let data: any;

  let currentQuestionIndex = 0;
  $: currentQuestion = data.questions[currentQuestionIndex];
</script>

<div class="w-full">
  <QuestionText question={currentQuestion.question} />
  <!-- Options -->
  <div class="flex flex-wrap justify-between">
    {#each currentQuestion.options as option (option.id)}
      <QuestionOption {option} />
    {/each}
  </div>
</div>
