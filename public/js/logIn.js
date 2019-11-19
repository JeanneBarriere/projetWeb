var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
    var password = form.elements.password.value;
    var mail = form.elements.mail.value;

    ajax.get('/connectUser',
    {password,mail},
    function(response){
      document.location.href="/index";
    },
    function(){
      alert('mauvais identifiants 2');
    }
  )
})
