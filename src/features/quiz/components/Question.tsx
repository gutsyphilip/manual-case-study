import React, { useEffect } from "react";
import styles from "./quiz.module.scss";
import cx from "classnames";

interface Props {
  data: {
    question: string;
    type: string;
    options: { [key: string]: string | boolean }[];
  };
  number: number;
  activeQuestion: number;
  // TODO: Resolve ref type issue
  activeRef?: any;
  userResponses: { [key: string]: string | boolean };
  handleSetResponse: (
    question: string,
    response: string | boolean,
    questionNumber: number
  ) => void;
}

const Question = ({
  data: { options, question, type },
  number,
  activeQuestion,
  handleSetResponse,
  userResponses,
  activeRef,
}: Props) => {
  const renderOptions = (): React.ReactNode => {
    return options.map((option, index) => {
      const label: string = Object.keys(option)[0];
      return (
        <div
          className={cx(styles.quizModal_question_options_item, {
            [styles.quizModal_question_options_item__selected]:
              userResponses[question] === options[index][label],
          })}
          data-testid="option"
          key={`${label}`}
          onClick={() => {
            handleSetResponse(question, options[index][label], number);
          }}
        >
          <div
            className={styles.quizModal_question_options_item_label}
            dangerouslySetInnerHTML={{ __html: label }}
          ></div>
          <div className={styles.quizModal_question_options_item_text}>
            {options[index][label]}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    if (activeQuestion > 1) {
      activeRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [activeRef, activeQuestion]);

  return (
    <div
      className={cx(styles.quizModal_question, {})}
      ref={activeQuestion === number ? activeRef : null}
    >
      <h4
        className={styles.quizModal_question_label}
      >{`Question ${number}`}</h4>
      <h1 className={styles.quizModal_question_title}>{question}</h1>

      <div
        className={styles.quizModal_question_options}
        data-testid="options-list"
      >
        {renderOptions()}
      </div>
    </div>
  );
};

export default Question;
