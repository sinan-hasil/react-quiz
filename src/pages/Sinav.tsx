import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./css/sinav.css";

export interface QuizType {
  question: string;
  options: string[];
  answer: string;
}

interface SinavProps {
  saveScore: (name: string, surname: string, score: number) => void;
  studentName: string;
  studentSurname: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const quizData: QuizType[] = [
  {
    question: "React kim tarafından çıkarılmıştır?",
    options: ["Bill Gatest", "Facebook", "Elon Musk", "Stephen Hawkink"],
    answer: "Facebook",
  },
  {
    question: "React'da global state tutmamızı sağlayan paket hangisidir?",
    options: ["react-router-dom", "nanoid", "react-bootstrap", "zustand"],
    answer: "zustand",
  },
  {
    question:
      "Bir React uygulamasında birden fazla element döndürmemiz halinde <></> tagları arasına ne yazılır?",
    options: ["React.Fragment", "await", "React.FormEvent", "HTMLDivElement"],
    answer: "React.Fragment",
  },
  {
    question:
      "componentler arası veri taşımak için kullanılan yapı hangisidir?",
    options: ["function", "hook", "props", "interface"],
    answer: "props",
  },
];

const Sinav = ({ saveScore, studentName, studentSurname }: SinavProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const isTrueAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 20);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      saveScore(studentName, studentSurname, score)
    }
  };
  return (
    <>
      <Container>
        {showScore ? (
          <div className="score-div">
            <Card className="score-card text-center" style={{ width: "18rem" }}>
              <Card.Body className="score-card-body">
                <Card.Title>Sınav Puanınız</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {score}
                </Card.Subtitle>
                <Card.Text>
                  {score < 50 ? (
                    <>
                      <h4>Tekrar Deneyiniz</h4>
                    </>
                  ) : score >= 50 ? (
                    <>
                      <h4>Geçti</h4>
                    </>
                  ) : score >= 75 ? (
                    <>
                      <h4>İyi</h4>
                    </>
                  ) : (
                    <>
                      <h4>Pek İyi</h4>
                    </>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <Card className="question-card text-center">
            <Card.Header>
              Soru {currentQuestion + 1} / {quizData.length}
            </Card.Header>
            <Card.Body className="question-card-body">
              <Card.Text>
                <h4>{quizData[currentQuestion].question}</h4>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="question-card-footer text-muted">
              {quizData[currentQuestion].options.map((item) => {
                return (
                  <>
                    <Button variant="dark" onClick={() => isTrueAnswer(item)}>
                      {item}
                    </Button>
                  </>
                );
              })}
            </Card.Footer>
          </Card>
        )}
      </Container>
    </>
  );
};

export default Sinav;
