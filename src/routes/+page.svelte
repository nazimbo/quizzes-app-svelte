<script lang="ts">
  import quizzes from "../data.json";
  import QuizzCard from "../components/QuizzCard.svelte";
</script>

<div class="quizzes-container max-w-[800px] m-auto flex justify-center h-screen items-center flex-wrap">
  {#each quizzes as quizz (quizz.id)}
    <QuizzCard {quizz} />
  {/each}
</div>
