document.getElementById('evaluationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    const form = event.target;
    const name = form.name.value;

    for (let i = 1; i <= 5; i++) {
        const selected = form['question' + i].value;
        score += parseInt(selected);
    }

    fetch('http://localhost:3000/api/evaluations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score }),
    })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '<h3>' + name + ', tu puntuación es: ' + score + ' puntos' + '</h3>';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
