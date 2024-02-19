<script lang="ts">
  import quizzes from "../data.json";
  import QuizzCard from "../components/QuizzCard.svelte";
</script>

{#each quizzes as quizz (quizz.id)}
  <QuizzCard {quizz} />
{/each}
