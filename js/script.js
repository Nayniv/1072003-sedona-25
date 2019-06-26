var buttonSearch = document.querySelector(".button-search");
var formSearch = document.querySelector(".search-form");
var arrival = formSearch.querySelector("[name=arrival]");
var departure = formSearch.querySelector("[name=departure]");
var adults = formSearch.querySelector("[name=adults]");
var children = formSearch.querySelector("[name=children]");




buttonSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  formSearch.classList.toggle("search-form-hidden");
});

formSearch.addEventListener('transitionend', function() {
  if (!formSearch.classList.contains('search-form-hidden')) arrival.focus();
});

formSearch.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    formSearch.classList.remove("form-error");
    formSearch.offsetWidth = formSearch.offsetWidth;
    formSearch.classList.add("form-error");
  }
});
