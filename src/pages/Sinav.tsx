import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./css/sinav.css"

interface QuizType {
  question: string;
  options: string[];
  answer: string;
}

const quizData: QuizType[] = [
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

const Sinav = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const isTrueAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <Container>
        {showScore ? (
          <>
            <h4>Sınav Sonucunuz:</h4>
            <p>puanınız: {score}</p>
          </>
        ) : (
          <Card className="text-center">
            <Card.Header>Soru {currentQuestion + 1} / {quizData.length}</Card.Header>
            <Card.Body>              
              <Card.Text>
                <h4>{quizData[currentQuestion].question}</h4>
              </Card.Text>
              
            </Card.Body>
            <Card.Footer className="text-muted">
                {quizData[currentQuestion].options.map((item) => {
                    return(
                        <>
                        <Button variant="dark" onClick={() => isTrueAnswer(item)}>{item}</Button>
                        </>
                    )
                })}
            </Card.Footer>
          </Card>
        )}
      </Container>
    </>
  );
};

export default Sinav;
