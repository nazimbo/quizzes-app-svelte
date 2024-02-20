<script lang="ts">
  import QuestionText from "./components/QuestionText.svelte";
  import QuestionOption from "./components/QuestionOption.svelte";
  import QuestionButton from "./components/QuestionButton.svelte";
  import { answers, type Answer } from "../../../store";

  export let data: any;

  let currentQuestionIndex = 0;
  let answersValue: Answer[];
  answers.subscribe((value) => (answersValue = value));

  $: currentQuestion = data.questions[currentQuestionIndex];
</script>

<div class="w-full">
  <QuestionText question={currentQuestion.question} />

  <div class="flex flex-wrap justify-between">
    {#each currentQuestion.options as option (option.id)}
      <QuestionOption {option} />
    {/each}
  </div>

  <QuestionButton />
</div>
