document.querySelector('.get-jokes').addEventListener('click', getJokes)


async function getJokes(e) {
  e.preventDefault();
  const url= `http://api.icndb.com/jokes/random/${number}`;
  const number = document.querySelector('input[type="number"]').value;
    let response = await fetch(url)
    console.log(response)
    let data = await response.json();
    let isSucess= data.type === "success";
    let jokes= data.value;
    console.log(jokes)

    let output = '';
    
    if(isSucess){
      jokes.forEach(function(joke){
        output += `<li>${joke.joke}</li>`
        })
    }else{
      output += `<li>Something went wrong</li>`
    }
      document.querySelector('.jokes').innerHTML = output
    
  }