// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
 
const articleHearts = document.querySelectorAll(".like-glyph");

function hideError(hideE) {
  const hideEr = document.getElementById('modal');
  hideEr.hidden;
} 


function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      if (heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      } else {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      };
      
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
