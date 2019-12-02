var listingSelector = select('listingType');

listingSelector.on('change', function() {

	var listingType = this.value;

	select('').html();

	ajax.get('/listing/getListing', 
		{listingType}, 
		function(res){
			select().html(res);
		},
		function(){
			alert("Erreur lors de la requête get");
		}

	);
})