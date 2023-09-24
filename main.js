// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
function like(e) {
  const heart = e.target;
  mimicServerCall("url") //Invoke mimicServerCall to simulate making a server request
    //When the "server" returns a success status:
    .then(() => {
      //When the "server" returns a success status: Change the heart to a full heart, Add the .activated-heart class to make the heart appear red
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
        //When a user clicks on a full heart:
      } else {
        heart.textContent = FULL_HEART;
        //Remove the .activated-heart class
        addElementActivated.classList.remove("activated-heart");
      }
    })
    //Respond to the error
    .catch(() => {
      //Display the error modal by removing the .hidden class
      const removeHiddenModal = document.querySelector(".hidden");
      //classList represents "contents of the element's class attribute" element.classList.remove(className);
      removeHiddenModal.classList.remove("hidden");
      //Display the server error message in the modal
      removeHiddenModal.textContent = "server error message";
      //Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
      setTimeout(() => (removeHiddenModal.className = "hidden"), 3000); // or setTimeout(() => removeHiddenModal.classList.add = "hidden", 3000)
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
