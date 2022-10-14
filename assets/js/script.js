var cardsContainer = document.querySelector('.card-container');
var baseApi = "https://jsonplaceholder.typicode.com/posts";
var loadBtn = document.querySelector('.load-more')
var wrapper = document.querySelector('.wrapper')
var cardIncrement = 6;
var i = 0

// Showing Fetched Data
function showPosts(data) {
  showData(i, cardIncrement);
  // Events on Load more button
  loadBtn.addEventListener('click', function () {
    showData((i +=6),cardIncrement += 6);
  })

  // function for showing data
  function showData(i, cardIncrement) {
    //condition for Showing 6 data 
    for (i; i < cardIncrement; i++) {
      if (data.length < cardIncrement) {
        cardIncrement = data.length ;
        loadBtn.classList.add('remove');
        var div = document.createElement('div');
        div.classList.add("btn");
        div.innerHTML = `<p>You Reached the End</p>`;
        wrapper.append(div);
      } else {
        var li = document.createElement('li');
        li.classList.add('card');
        li.innerHTML = `<span class="card-id">${data[i].id}</span>
        <h2 class="card-title">${data[i].title}</h2>
        <p class="card-content">${data[i].body}</p>`;
        cardsContainer.append(li);
      } 
    } 
  }  
}

// Api Fetching
function getPosts(api) {
  fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    showPosts(data);
  })
}
getPosts(baseApi);