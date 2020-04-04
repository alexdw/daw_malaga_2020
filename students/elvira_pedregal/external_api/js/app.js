document.querySelector('.get-jokes').addEventListener('click', getJokes)

async function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector('input[type="number"]').value;
  const url = `http://api.icndb.com/jokes/random/${number}`
  
  let output = '';

  try {

    let response = await fetch(url);
    let data = await response.json();
    let jokes = data.value;
    
    if(data.type=='success'){
      jokes.map(joke => {
        output +=`<li>${joke.joke}</li>`
      });
        
    } else {
        output += '<li>El status de tu peticion no es 200</li>'
    }

  } catch (e) {
    output += '<li>No se ha realizado la peticion al servidor</li>'
  }
  document.querySelector('.jokes').innerHTML = output;
}
