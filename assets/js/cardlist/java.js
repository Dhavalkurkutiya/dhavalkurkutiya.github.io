
// Search functionality add
function searchCard() {
  let search = document.getElementById('searchTxt').value;
  search = search.toLowerCase();
  let cardTxt = document.getElementsByTagName('a');

  for (i = 0; i < cardTxt.length; i++) {
    if (!cardTxt[i].innerHTML.toLowerCase().includes(search)) {
      cardTxt[i].style.display = "none";
    } else {
      cardTxt[i].style.display = "block";
    }
  }
}


// Grab the news container
let linkCard = document.getElementById('linkCard');
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', '../../assets/json/java.json', true);
xhr.setRequestHeader("Content-Type", "application/json");
// What to do progress
xhr.onprogress = function(event) {};
// What to do when response is ready
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let cardData = json.cardData;
    // console.log(cardData);
    let cardHtml = "";
    cardData.forEach(function(element, index) {
      let news = `
      <a class="text-reset nav-link p-0 mb-6" href="${element['url']}">
      <div class="card card-active-listener">
      <div class="card-body">
      <div class="media">
      <div class="avatar mr-5">
      <img class="avatar-img" src="../../svg/github.svg" alt="Bootstrap Themes">
      </div>
      <div class="media-body overflow-hidden">
      <div class="d-flex align-items-center mb-1">
      <h6 class="text-truncate mb-0 mr-auto">${element['title']}</h6>
      <p class="small text-muted text-nowrap ml-4">${element['publishedAt']}</p>
      </div>
      <div class="text-truncate">${element['content']}</div>
      </div>
      </div>
      </div>
      <div class="badge badge-circle badge-primary badge-border-light badge-top-right">
      <span>${index +1}</span>
      </div>
      </div>
      </a>`;
      cardHtml += news;
    });
    linkCard.innerHTML = cardHtml;
  } else {
    console.log('Error');
  }
}
// Send this Requset
xhr.send();


window.onload = function () {
var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
console.log('Page load time is '+ loadTime);
}