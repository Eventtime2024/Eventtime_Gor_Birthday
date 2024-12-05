

$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
   
});
// $(document).on("contextmenu", function(e) {
//     e.preventDefault();
// });

let audio=document.getElementById("myAudio")
 $("#play").click(function(){
  if(($("#play").css("width")) == "50px"){
      $("#play").css("width", "30px");
      $("#play").css("height", "30px");
      audio.pause();
      audio.currentTime = 0;
  } 
  else {
      $("#play").css("width","50px");
      $("#play").css("height","50px");
      audio.play();
  }
});

function sendMail(e) {

    let params = {
        choose: document.querySelector('input[name="choose"]:checked').value,
        guestname: document.getElementById("guestname").value,
        guestnumber: document.getElementById("guestnumber").value,
    };
  
    const serviceID = "sservice_ztx8mon";
    const templateID = "template_cv7na15";
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            (document.querySelector('input[name="choose"]:checked').value = ""),
                (document.getElementById("guestname").value = ""),
                (document.getElementById("guestnumber").value = ""),
                console.log(res);
            console.log("Succesfully");
            window.location.reload();
        })
        .catch((err) => console.log(err));
  }
  
  const sendMailbtn = document.querySelector("#sendMail");
  
  sendMailbtn.addEventListener("click", (e) => {
    e.preventDefault();
    sendMail();
   alert("Ուղարկված է");
  });