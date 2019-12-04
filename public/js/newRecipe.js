var form = document.querySelector("form");
var submit = document.getElementById("submit");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 7
console.log(form.elements[0].name); // Affiche "pseudo" // Affiche "password"

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  for(var i=0; i<form.elements.length;i++){
    if(form.elements[i].value==""){alert("remplissez le formulaire");return ;}
  }
    console.log(form.elements);
    var title = form.elements.title.value;
    var category = form.elements.category.value;
    //var author = user.pseudo;
    var rating = 0;
    var time = form.elements.time.value;
    var backingTime = form.elements.backingTime.value;
    var tools = form.elements.tools.value;
    var ingredients = form.elements.ingredients.value;
    var steps = form.elements.steps.value;
    var date = new Date();
    ajax.post('/createRecipe',
    {title,category,rating,time,backingTime,tools,ingredients,steps,date},
    function(response){
      document.location.href="/index";
    },
    function(){
      alert('erreur');
    }
  )
    // document.location.href="/confirmedRegistration"
});
