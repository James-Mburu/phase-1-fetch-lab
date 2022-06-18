function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  let bookPromise = fetch("https://anapioficeandfire.com/api/books")

    // calling the fetch function
    fetch("https://anapioficeandfire.com/api/books")
    .then(response => (
      response.json  
    )).then(response => (
      JSON.parse(response)      
    )).then(response => (
      renderBooks(response)      
    ))
    

    

   
    // const json = response
    // const obj = JSON.parse(json)
   // .then(obj => )

   //renderBooks(obj)


    //  bookPromise = fetch("https://anapioficeandfire.com/api/books")
    // bookPromise
    // .then((response) => (response.json()))
    // console.log(response)
    // 

    // //returning/resolving the fetch function
    //   .then(resp = resp.json())
    //       //convert response into json format
    //   

  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
