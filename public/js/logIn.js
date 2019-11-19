var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  alert('ok');
  e.preventDefault();
  e.stopPropagation();
  	const allUsers = await getUsers();
  	for (var i=0; i<allUsers.length; i++){
  		if(allUsers[i].mail == form.elements.mail.value){
        alert('ok');
      }
    }
    return;
  }
})
