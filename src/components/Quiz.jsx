"use client";
import Image from "next/image";
import styles from "../styles/quiz.css";
import QuizAnswerCard from "./QuizAnswerCard";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});
import { useState } from "react";

export default function Quiz({ question, answers }) {
  const [filters, setFilters] = useState({
    stemning: null,
    genre: null,
    month: null,
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizstart, setQuizStart] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: "Hvilken steming er du i?",
      answers: [
        {
          question: "Fællesang",
          filter: "stemning",
          value: "dansefest",
        },
        {
          question: "Afslapning",
          filter: "stemning",
          value: "dims",
        },
        {
          question: "dansefest",
          filter: "stemning",
          value: "dims3",
        },
        {
          question: "Hygge i parken",
          filter: "stemning",
          value: "dims4",
        },
        {
          question: "Familiehygge",
          filter: "stemning",
          value: "dims5",
        },
        {
          question: "Kulturel",
          filter: "stemning",
          value: "dims6",
        },
      ],
    },
    {
      question: "Hvad ønsker du at få ud af din oplevelse?",
      answers: [
        {
          question: "At blive inspireret",
          filter: "koncept",
          value: "mint",
        },
        {
          question: "Afbræk for hverdagen",
          filter: "koncept",
          value: "fredagsrock",
        },
        {
          question: "Fredagsbar",
          filter: "koncept",
          value: "fredagsrock",
        },
      ],
    },
  ]);

  function handleAnswer(filter, value) {
    console.log("HELP");
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));

    console.log({ ...filters, [filter]: value });
  }

  const loaderWidth = (questionIndex / questions.length) * 100;

  return (
    <>
      {quizstart ? (
        <section className="quiz">
          <div className="top">
            <h2 className="question">{questions[questionIndex].question}</h2>
            <div className="loadercontainer">
              <p>{loaderWidth + "%"}</p>
              <div className="loader">
                <div
                  className="process"
                  style={{ width: `${loaderWidth}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="answershelf">
            {questions[questionIndex].answers.map((question, index) => (
              <QuizAnswerCard
                key={index}
                handleAnswer={handleAnswer}
                question={question.question}
                value={question.value}
                filter={question.filter}
              />
            ))}
          </div>
          <div className="bottom">
            {questionIndex > 0 ? (
              <button
                className="back"
                onClick={() => {
                  console.log("BACK");
                  questionIndex > 0 ? setQuestionIndex((old) => old - 1) : null;
                }}
              >
                <p>Tilbage</p>
                <div className="fill"></div>
              </button>
            ) : (
              <div></div>
            )}

            <button
              className="next"
              onClick={() => {
                console.log("NEXT");
                questionIndex < 5 ? setQuestionIndex((old) => old + 1) : null;
              }}
            >
              <p>
                {questionIndex === questions.length - 1
                  ? "Se resultat"
                  : "Næste"}
              </p>

              <div className="fill"></div>
            </button>
          </div>
        </section>
      ) : (
        <section className="startquiz">
          <h1 className={`${myFont.className}`}>
            Test hvilken stemning der <br /> passer til dig i dag!
          </h1>
          <button
            className="next"
            onClick={() => {
              setQuizStart((old) => !old);
            }}
          >
            <p>Start Testen</p>

            <div className="fill"></div>
          </button>
        </section>
      )}
    </>
  );
}
