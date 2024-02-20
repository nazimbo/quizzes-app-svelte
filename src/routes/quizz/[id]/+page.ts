import quizzes from "../../../data.json";
import { error } from "@sveltejs/kit";

export function load({ params }: { params: { id: string } }) {
  const quizz = quizzes.find((quizz) => quizz.id === parseInt(params.id));

  if (!quizz) {
    throw error(404, "Quizz not found");
  }

  return quizz;
}
