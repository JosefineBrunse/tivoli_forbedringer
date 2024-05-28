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
import ProgramComponent from "./ProgramComponent";
import SignUp from "./signup";

export default function Quiz({ question, answers, data }) {
  const [filters, setFilters] = useState({
    stemning: null,
    genre: null,
    month: null,
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizstart, setQuizStart] = useState(false);
  const [quizdone, setQuizdone] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: "Hvilken steming er du i?",
      answers: [
        {
          question: "Fællesang",
          filter: "stemning",
          value: "Fællessang",
        },
        {
          question: "Afslapning",
          filter: "Fællessang",
          value: "Rolige rytmer",
        },
        {
          question: "dansefest",
          filter: "stemning",
          value: "Dansefest",
        },
        {
          question: "Store følelser",
          filter: "stemning",
          value: "Store følelser",
        },
        {
          question: "Energisk aften",
          filter: "stemning",
          value: "Høj energi",
        },
        {
          question: "Familiehygge",
          filter: "stemning",
          value: "Glade dage",
        },
      ],
    },

    {
      question: "Hvilken genre er du til?",
      answers: [
        {
          question: "Pop",
          filter: "genre",
          value: "Pop",
        },
        {
          question: "Rock",
          filter: "genre",
          value: "Rock",
        },
        {
          question: "Klassisk",
          filter: "genre",
          value: "Klassisk",
        },
        {
          question: "Hiphop",
          filter: "genre",
          value: "Hiphop",
        },
        {
          question: "Dance",
          filter: "genre",
          value: "Dance",
        },
        {
          question: "Funk",
          filter: "genre",
          value: "Funk",
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
      {quizstart && !quizdone ? (
        <section className="quiz">
          <div className="top">
            <h2 className="question">{questions[questionIndex].question}</h2>
            <div className="loadercontainer">
              <p>{Math.round(loaderWidth) + "%"}</p>
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
                questionIndex === questions.length - 1
                  ? setQuizdone(true)
                  : setQuestionIndex((old) => old + 1);
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
      ) : quizdone ? (
        <>
          {/* <button className="primary">
            <p>Gem dit resultat</p>
            <div className="fill"></div>
          </button> */}

          <ProgramComponent
            quizfilters={filters}
            quiz={true}
            data={data}
            headline={"Vi anbefaler"}
          />
          <SignUp />
        </>
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
