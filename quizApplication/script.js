document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "question1",
      answer: "opb",
      option1: "opa",
      option2: "opb",
      option3: "opc",
      option4: "opd",
    },
    {
      question: "question2",
      answer: "opb",
      option1: "opa",
      option2: "opb",
      option3: "opc",
      option4: "opd",
    },
    {
      question: "question3",
      answer: "opb",
      option1: "opa",
      option2: "opb",
      option3: "opc",
      option4: "opd",
    },
    {
      question: "question4",
      answer: "opb",
      option1: "opa",
      option2: "opb",
      option3: "opc",
      option4: "opd",
    },
  ];

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const nextbtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const startbtn = document.getElementById("start-btn");

  let totalScore = 0;
  let quesno = 0;

  startbtn.addEventListener("click", () => {
    startbtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    nextbtn.classList.remove("hidden");
    displayQues(quesno);
  });

  function displayQues(index) {
    if (index == 4) {
      questionContainer.classList.add("hidden");
      nextbtn.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      resultContainer.children[1].innerHTML = ` <span>Score is ${totalScore}</span>`;
      return;
    }
    choicesList.textContent = "";
    nextbtn.addEventListener("click", () => {
      const response = document.querySelector('input[name="response"]:checked');
      if (!response) return;
      if (response.value !== questions[quesno].answer) return;
      totalScore++;
      quesno++;
      displayQues(quesno);
    });
    questionText.textContent = questions[index].question;
    const fragment = document.createDocumentFragment();
    const currQuestion = questions[index];
    for (let i = 1; i < 5; i++) {
      const li = document.createElement("li");
      li.innerHTML = `<input name='response' type='radio' value=${
        currQuestion["option" + i]
      }></input><span>${currQuestion["option" + i]}</span>`;
      fragment.appendChild(li);
    }
    choicesList.appendChild(fragment);
  }
});
