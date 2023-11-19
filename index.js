var display = document.getElementById('inputField');


function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateResult()
{

    var input = document.getElementById('inputField').value
try 
    {
    var result = eval(input);
    alert('Résultat : ' + result);
    } catch (error)
      {
      alert("T'es con...");
      }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') 
    {
      event.preventDefault();
      calculateResult();
    }
  }

  const container = document.querySelector('.container');
const button = document.querySelector('.move-button');

button.addEventListener('click', function() {
  container.classList.toggle('move-container');
});


function calculateResult() {
    var input = document.getElementById('inputField').value;
    var resultDisplay = document.getElementById('resultDisplay'); // Récupérer l'élément où afficher le résultat
  
    try {
      var result = eval(input);
  
      // Afficher le résultat dans la div resultDisplay
      resultDisplay.textContent = 'Résultat : ' + result;
        } catch (error) 
          {
          resultDisplay.textContent = "T'es con...";
          }
  }


