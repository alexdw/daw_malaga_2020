document.querySelector('.get-jokes').addEventListener('click', getJokes)

async function getJokes(e){
  e.preventDefault()
  const number = document.querySelector('input[type="number"]').value;
  let URL = `http://api.icndb.com/jokes/random/${number}`;
  let response = await fetch(URL);
  let data = await response.json();
  let isSuccess = data.type === "success";
  let jokes = data.value;

  console.log(isSuccess)
  let output = '';

   if(isSuccess) {
    jokes.forEach(function(joke){
      output += `<li>${joke.joke}</li>`
    })
  } else {
    output += '<li>Something went wrong</li>'
  }
  document.querySelector('.jokes').innerHTML = output

}
