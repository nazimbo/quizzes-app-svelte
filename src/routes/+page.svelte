<script lang="ts">
  import quizzes from "../data.json";
  import * as images from "../images";
</script>

<div class="quizzes-container max-w-[800px] m-auto flex justify-center h-screen items-center flex-wrap">
  {#each quizzes as quizz (quizz.id)}
    <div class="quizz-card shadow w-[300px] rounded overflow-hidden cursor-pointer m-2">
      <img class="h-44" src={images[quizz.imageUrl]} alt="" />
      <div class="flex items-center justify-between px-3 py-2">
        <h1 class="font-bold">{quizz.name}</h1>
        <p>{quizz.questions.length} questions</p>
      </div>
    </div>
  {/each}
</div>
