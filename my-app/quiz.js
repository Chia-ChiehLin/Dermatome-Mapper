import { createMenu } from './src/menu/menu';

document.addEventListener('DOMContentLoaded', () => {
  createMenu(document.querySelector('#menu'));

  const quizForm = document.getElementById('quizForm');
  const resultDiv = document.getElementById('result');

  quizForm.onsubmit = function (event) {
    event.preventDefault();

    let score = 0;
    const answers = {
      q1: 'L5',
      q2: 'C7',
      q3: 'L4',
      q4: 'C8',
      q5: '3/5'
    };

    const form = new FormData(this);
    const results = [];

    for (let [question, correctAnswer] of Object.entries(answers)) {
      const userAnswer = form.get(question);
      const isCorrect = userAnswer === correctAnswer;
      if (isCorrect) {
        score++;
      }
      results.push({
        question: question,
        userAnswer: userAnswer || 'Not answered',
        correctAnswer: correctAnswer,
        isCorrect: isCorrect
      });
    }

    let resultHTML = `<p>You scored ${score} out of ${Object.keys(answers).length}.</p>`;
    // Prettier "Question Results" with gradient background, border, and padding
    resultHTML += '<div style="background: linear-gradient(to right, #e0f7fa, #b2ebf2); border: 2px solid #0288d1; border-radius: 8px; padding: 1rem; color: #01579b;"><h3 style="margin-top: 0; font-family: Arial, sans-serif;">Question Results:</h3><ul style="list-style-type: none; padding-left: 0;">';
    results.forEach((result, index) => {
      const status = result.isCorrect ? 'Correct' : 'Incorrect';
      const color = result.isCorrect ? 'green' : 'red';
      resultHTML += `<li style="color: ${color}; margin-bottom: 0.5rem;">Question ${index + 1}: ${status}</li>`;
    });
    resultHTML += '</ul></div>';

    // "Reveal Answers" button styled to match "Submit Quiz" button
    resultHTML += '<button id="revealAnswers" style="margin-top: 1rem; padding: 0.7rem 1.2rem; background-color: grey; color: white; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s;">Reveal Correct Answers</button>';
    resultHTML += '<div id="correctAnswers" style="display: none; margin-top: 1rem;"></div>';

    resultDiv.innerHTML = resultHTML;

    document.getElementById('revealAnswers').addEventListener('click', () => {
      const correctAnswersDiv = document.getElementById('correctAnswers');
      let answersHTML = '<div style="background: linear-gradient(to right, #e8f5e9, #c8e6c9); border: 2px solid #388e3c; border-radius: 8px; padding: 1rem; color: #1b5e20;"><h3 style="margin-top: 0; font-family: Arial, sans-serif;">Correct Answers:</h3><ul style="list-style-type: none; padding-left: 0;">';
      results.forEach((result, index) => {
        answersHTML += `<li style="margin-bottom: 0.5rem;">Question ${index + 1}: ${result.correctAnswer}</li>`;
      });
      answersHTML += '</ul></div>';
      correctAnswersDiv.innerHTML = answersHTML;
      correctAnswersDiv.style.display = 'block';
      document.getElementById('revealAnswers').style.display = 'none';

      // Add hover effect to match "Submit Quiz" button
      const revealButton = document.getElementById('revealAnswers');
      revealButton.onmouseover = () => revealButton.style.backgroundColor = '#34495e';
      revealButton.onmouseout = () => revealButton.style.backgroundColor = 'grey';
    });
  };
});