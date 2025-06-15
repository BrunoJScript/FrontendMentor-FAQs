import { useState } from "react";

import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";
import iconStar from "./assets/icon-star.svg";

const questions = [
  {
    question: "O Que é Frontend Mentor, e como pode me ajudar?",
    answer:
      "Frontend Mentor oferece desafios de codificação realistas para ajudar desenvolvedores a aprimorar suas habilidades de codificação frontend com projetos em HTML, CSS e JavaScript. É adequado para todos os níveis e ideal para a construção de portfólio.",
  },
  {
    question: "O Frontend Mentor é Gratuito?",
    answer:
      "Sim, o Frontend Mentor oferece desafios de codificação gratuitos e premium, com a opção gratuita fornecendo acesso a uma variedade de projetos adequados para todos os níveis de habilidade.",
  },
  {
    question: "Posso usar os projetos do Frontend Mentor no meu portfolio?",
    answer:
      "Sim, você pode usar os projetos do Frontend Mentor que você completou no seu portfólio. É uma excelente forma de mostrar suas habilidades para potenciais empregadores!",
  },
  {
    question: "Como posso obter ajuda se eu estiver travado em um desafio?",
    answer:
      "O melhor lugar para conseguir ajuda é na comunidade Discord do Frontend Mentor. Há um canal de ajuda onde você pode fazer perguntas e buscar suporte de outros membros da comunidade.",
  },
];

function App() {
  const [openIndexes, setOpenIndexes] = useState(
    Array(questions.length).fill(false)
  );

  const toggleQuestion = (index) => {
    setOpenIndexes((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className="container">
      <div className="container-header">
        <img src={iconStar} alt="star" />
        <h1>FAQs</h1>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="question-answer">
            <button onClick={() => toggleQuestion(index)}>
              {item.question}
              <div>
                <img
                  src={iconPlus}
                  alt="plus"
                  style={{ display: openIndexes[index] ? "none" : "inline" }}
                />
                <img
                  src={iconMinus}
                  alt="minus"
                  style={{ display: openIndexes[index] ? "inline" : "none" }}
                />
              </div>
            </button>
            {openIndexes[index] && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
