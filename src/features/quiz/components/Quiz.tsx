import React, { Component } from "react";
import { Modal } from "../../../components/modal";
import Question from "./Question";
import {
  ManualLogo,
  FrownIcon,
  SmileIcon,
  CloseIcon,
} from "../../../assets/svgs";

import { questions } from "../../../data/quiz.json";

import styles from "./quiz.module.scss";

interface Props {
  setShowQuizModal: (value: boolean) => void;
}
interface State {
  activeQuestion: number;
  userResponses: { [key: string]: string | boolean };
  isCompleted: boolean;
}

class Quiz extends Component<Props, State> {
  state = {
    activeQuestion: 1,
    userResponses: {},
    isCompleted: false,
  };

  handleSetResponse = (
    question: string,
    response: string | boolean,
    questionNumber: number
  ) => {
    const { userResponses } = this.state;
    this.setState({
      userResponses: { ...userResponses, [question]: response },
    });
    if (questionNumber < 3) {
      this.setState({ activeQuestion: questionNumber + 1 });
    } else {
      this.handleSubmitQuiz();
    }
  };

  handleSubmitQuiz = () => {
    this.setState({ isCompleted: true });
  };

  render() {
    const { activeQuestion, isCompleted, userResponses } = this.state;
    const { setShowQuizModal } = this.props;
    const activeRef = React.createRef();
    return (
      <Modal
        className={styles.quizModal}
        size="cover"
        show={true}
        {...this.props}
      >
        <header className={styles.quizModal_header}>
          <ManualLogo className={styles.quizModal_header_logo} />
          <CloseIcon
            className={styles.quizModal_header_closeIcon}
            onClick={() => {
              setShowQuizModal(false);
            }}
          />
        </header>
        {!isCompleted &&
          questions.map((item, index) => {
            return (
              <Question
                userResponses={userResponses}
                activeRef={activeRef}
                handleSetResponse={this.handleSetResponse}
                key={item.question.replace(" ", "+")}
                data={item}
                number={index + 1}
                activeQuestion={activeQuestion}
              />
            );
          })}

        {isCompleted && (
          <section className={styles.quizModal_result}>
            {Object.values(userResponses).includes(true) ? (
              <>
                <FrownIcon className={styles.quizModal_result_icon} />
                <p className={styles.quizModal_result_message}>
                  Unfortunately, we are unable to prescribe this medication for
                  you. This is because finasteride can alter the PSA levels,
                  which maybe used to monitor for cancer. You should discuss
                  this further with your GP or specialist if you would still
                  like this medication.
                </p>
              </>
            ) : (
              <>
                <SmileIcon className={styles.quizModal_result_icon} />
                <p className={styles.quizModal_result_message}>
                  Great news! We have the perfect treatment for your hair loss.
                  Proceed to{" "}
                  <a
                    href="https://www.manual.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    www.manual.co
                  </a>
                  , and prepare to say hello to your new hair!
                </p>
              </>
            )}
          </section>
        )}
      </Modal>
    );
  }
}

export default Quiz;
