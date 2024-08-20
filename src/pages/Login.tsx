import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Nav,
  Row,
  Table,
} from "react-bootstrap";
import "./css/login.css";
import { useEffect, useState } from "react";
import Sinav, { quizData, QuizType } from "./Sinav";
import { Link } from "react-router-dom";

interface StudentScoreType {
  name: string;
  surname: string;
  score: number;
}

const teacherPassword = "asd";
const studentPassword = "sinan";

const Login = () => {
  const [student, setStudent] = useState<boolean>(false);
  const [teacher, setTeacher] = useState<boolean>(true);
  const [login, setLogin] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [newOptions, setNewOptions] = useState<string[]>(["", "", "", ""]);
  const [newAnswer, setNewAnswer] = useState<string>("");
  const [studentScores, setStudentScores] = useState<StudentScoreType[]>([]);
  const [studentName, setStudentName] = useState<string>("");
  const [studentSurname, setStudentSurname] = useState<string>("");


  const handleLogin = () => {
    if (teacher && password === teacherPassword) {
      setLogin(true);
    } else if (student && password === studentPassword) {
      setLogin(true);
    } else {
      alert("Yanlış şifre!");
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  const handleNewQuestion = () => {
    if (newQuestion && newOptions.every((opt) => opt) && newAnswer) {
      const newQuestionData: QuizType = {
        question: newQuestion,
        options: newOptions,
        answer: newAnswer,
      };

      const updatedQuizData = [...quizData, newQuestionData];

      localStorage.setItem("quizData", JSON.stringify(updatedQuizData));  
       
      quizData.push(newQuestionData);
      alert("Yeni soru eklendi!");
      setNewQuestion("");
      setNewOptions(["", "", "", ""]);
      setNewAnswer("");
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  const handleBeforeLogin = () => {
    setLogin(false);
  };

  const handleStudent = () => {
    setStudent(true);
    setTeacher(false);
  };

  const handleTeacher = () => {
    setTeacher(true);
    setStudent(false);
  };

  useEffect(() => {    
    const savedScore = localStorage.getItem("studentScores");
    if (savedScore) {
      setStudentScores(JSON.parse(savedScore));
    }
  }, []);

  const saveScore = (name: string, surname: string, score: number) => {
    if (name && surname) {
      const newScores = [...studentScores, { name, surname, score }];
      setStudentScores(newScores);
      localStorage.setItem("studentScores", JSON.stringify(newScores));
    } else {
      alert("Lütfen öğrenci adı ve soyadı girin.");
    }
  };

  return (
    <Container className="login">
      {!login ? (
        <div className="login-card">
          <div className="login-button">
            <Button
              className="w-100"
              onClick={handleStudent}
              variant={student ? "danger" : "light"}
            >
              Öğrenci
            </Button>
            <Button
              className="w-100"
              onClick={handleTeacher}
              variant={teacher ? "danger" : "light"}
            >
              Öğretmen
            </Button>
          </div>
          <div className="login-body">
            {teacher ? (
              <>
                <Row>
                  <Col>
                    <small>*Adınız</small>
                    <Form.Control type="text" />
                  </Col>
                  <Col>
                    <small>*Soyadınız</small>
                    <Form.Control type="text" />
                  </Col>
                </Row>
                <div>
                  <small>*Şifreniz</small>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button variant="danger" onClick={handleLogin}>
                  Giriş Yap
                </Button>
              </>
            ) : student ? (
              <>
                <Row>
                  <Col>
                    <small>*Adınız</small>
                    <Form.Control
                     type="text"
                     value={studentName}
                     onChange={(e) => setStudentName(e.target.value)}
                      />
                  </Col>
                  <Col>
                    <small>*Soyadınız</small>
                    <Form.Control
                     type="text"
                     value={studentSurname}
                     onChange={(e) => setStudentSurname(e.target.value)}
                     />
                  </Col>
                </Row>
                <div>
                  <small>*Şifreniz</small>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button variant="danger" onClick={handleLogin}>
                  Giriş Yap
                </Button>
              </>
            ) : null}
          </div>
        </div>
      ) : student ? (
        <Sinav
         saveScore={saveScore}
         studentName={studentName}
         studentSurname={studentSurname}
         />
      ) : (
        <div className="teacher-panel">
          <div className="question-input">
            <div className="why-question">
              <small>*Soruyu Giriniz</small>
              <FloatingLabel controlId="floatingTextarea2" label="">
                <Form.Control
                  as="textarea"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  style={{ height: "100px", width: "950px" }}
                />
              </FloatingLabel>
            </div>
            <div className="why-options">
              <Row>
                {newOptions.map((item, index) => (
                  <Col xs={6} key={index}>
                    <small>*{index + 1}. Şık</small>
                    <Form.Control
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleOptionChange(index, e.target.value)
                      }
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <div className="why-answer mt-3">
              <small>*Cevap</small>
              <Form.Control
                type="text"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
              />
            </div>
            <Button
              variant="danger"
              className="w-100 mt-3"
              onClick={handleNewQuestion}
            >
              Ekle
            </Button>
            <Nav.Link
              as={Link}
              to={"/login"}
              className="text-end mt-3"
              onClick={handleBeforeLogin}
            >
              geri dön
            </Nav.Link>
          </div>

          <Table striped bordered hover variant="danger">
            <thead>
              <tr>
                <th>Öğrenci İsmi</th>
                <th>Öğrenci Soyismi</th>
                <th>Öğrenci Puanı</th>
              </tr>
            </thead>
            <tbody>            
              {studentScores.map((score, index) => (
                <tr key={index}> 
                  <td>{score.name}</td>                 
                  <td>{score.surname}</td>                 
                  <td>{score.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Login;
