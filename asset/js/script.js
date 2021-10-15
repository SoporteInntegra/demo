var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
var messagesend = document.getElementById('messagesuccess')
var messagebutton = document.getElementById('messagebutton')

function clickemail(){
    document.getElementById('liveToastBtn').click();
}

messagesend.addEventListener('hidden.bs.toast', function () {
    messagebutton.classList.remove("d-none")
})

if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}

document.documentElement.style.setProperty('--animate-duration', '2s');

var form = document.getElementById("my-form");
                      
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    //status.innerHTML = "Message send success!";
    form.reset()
    var myToast = bootstrap.Toast.getInstance(toastLiveExample)
    myToast.hide()
    var message = new bootstrap.Toast(messagesend)
    message.show()
    messagebutton.classList.add("d-none")
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)