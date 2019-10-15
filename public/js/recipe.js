function color(id){

	for (var i=1; i<= id; i++){

		var element = document.getElementById(i);
		element.classList.remove("empty");
		element.classList.add("filled");
		element.innerHTML = "<i class="fas fa-star"></i>";

	}

}