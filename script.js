for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${1 + Math.random() * 2}s`;
    document.body.appendChild(star);
  }

  const SHEET_URL = 'https://opensheet.elk.sh/1Kp4nN8YwGsDgDEorEQbmPcTmkIMaImjaGKWpR7nR6qQ/Data';

  let answers = [];

  function spawnAnswer(text) {
    const div = document.createElement('div');
    div.classList.add('answer');
    div.textContent = text;
    div.style.left = `${Math.random() * 80}vw`;
    div.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 15000);
  }

setTimeout(() => {
location.reload();
}, 5000);

  fetch(SHEET_URL)
    .then(res => res.json())
    .then(data => {
      console.log(" Loaded data:", data); 
      answers = data.map(row => row["최근에 힘들었는데 극복한 적 있으신가요?"]).filter(Boolean);
      let i = 0;
      setInterval(() => {
        if (answers.length > 0) {
          spawnAnswer(answers[i % answers.length]);
          i++;
        }
      }, 1000);
    })
    .catch(err => {
      console.error(" Failed to fetch Google Sheet data:", err);
    });