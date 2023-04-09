var box1 =  document.getElementById("box1");
var box2 = document.getElementById("box2");
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function(){
    box1.style.visibility = "hidden";
    box2.style.visibility = "visible";
});

var ratingBtn = document.getElementsByClassName("btn");
var thankyouAnswer = document.getElementById("heading2");
// So, the first for loop is used to set up the click event listener on each button, 
// and the second for loop is used to handle the selection of one button and the deselection of all others.
for (var i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", function() {
    for (var j = 0; j < ratingBtn.length; j++) {
        ratingBtn[j].classList.remove("selected");
      }
      
      // Add the 'selected' class to the clicked button
      this.classList.add("selected");
  
      // Update the text of the 'thankyouAnswer' element based on the clicked button
      if (this.id === '1') {
        thankyouAnswer.innerHTML = "You selected 1 out of 5";
      } else if (this.id === '2') {
        thankyouAnswer.innerHTML = "You selected 2 out of 5";
      } else if (this.id === '3') {
        thankyouAnswer.innerHTML = "You selected 3 out of 5";
      } else if (this.id === '4') {
        thankyouAnswer.innerHTML = "You selected 4 out of 5";
      } else if (this.id === '5') {
        thankyouAnswer.innerHTML = "You selected 5 out of 5";
      }
    });
  }
 
  
  
  
  
  
  
  
 