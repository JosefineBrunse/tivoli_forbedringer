import Image from "next/image";
import styles from "../styles/quiz.css";
export default function QuizAnswerCard({
  question,
  filter,
  value,
  handleAnswer,
}) {
  return (
    <button className="quizanswer" onClick={() => handleAnswer(filter, value)}>
      <h3>{question}</h3>
    </button>
  );
}
