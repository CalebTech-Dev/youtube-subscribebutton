function buttonElement(){
  let subscribeElement = document.querySelector('.subscribe-btn');

  if(subscribeElement.innerHTML === 'Subscribe'){
    subscribeElement.innerHTML = 'Subscribed';
    subscribeElement.classList.add('is-subscribed');
  }else {
    subscribeElement.innerHTML = 'Subscribe';
    subscribeElement.classList.remove('is-subscribed');
  }
}