document.getElementById('evaluationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let puntuacion = 0;
    const form = event.target;
    const nombre = form.name.value;
  
    for (let i = 1; i <= 5; i++) {
      const selected = form['question' + i].value;
      puntuacion += parseInt(selected);
    }
  
    fetch('http://localhost:3001/api/evaluations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, puntuacion }),
    })
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '<h3>' + nombre + ', tu puntuación es: ' + puntuacion + '</h3>';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  