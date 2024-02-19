<script lang="ts">
  import * as images from "../images";

  interface Quizz {
    id: number;
    name: string;
    imageUrl: keyof typeof images;
    questions: {
      id: number;
      text: string;
      answer: string;
      options: {
        id: number;
        text: string;
        label: string;
      }[];
    }[];
  }

  export let quizz: Quizz;
</script>

<div class="quizz-card shadow w-[300px] rounded overflow-hidden cursor-pointer m-2">
  <img class="h-44" src={images[quizz.imageUrl]} alt="" />
  <div class="flex items-center justify-between px-3 py-2">
    <h1 class="font-bold">{quizz.name}</h1>
    <p>{quizz.questions.length} questions</p>
  </div>
</div>
