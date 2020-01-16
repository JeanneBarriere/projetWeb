function connectforrecipe(){
  if(window.confirm("Vous n'êtes pas connecté !\n\nVoulez-vous vous connecter pour écrire une nouvelle recette ?")) {
  			document.location.href="/logIn";
      };
};

function generateListingLink(direction){
	var newPage = document.location.href;
	var currentPageNo = currentPage.charAt(currentPage.length-1);
	newPage.charAt(currentPage.length-1) = currentPage+direction;
	document.location.href = newPage;
	console("test");
}
