$('#app').html(`
	<div class="progress">
    <div class="indeterminate"></div>
	</div>
`);


setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	x();
},777);


function x(){
	$.ajax({
		url: "http://www.omdbapi.com/?t=gotham"

	}).done(function(res){
		console.log(res);
		let html = `
		

			<h1 style="font-size:2800%; font-family:Impact;">${res.Title}</h1>
			<h3 style="text-align:center;">${res.Plot}</h3>
			<center><img src="${res.Poster}"></center>
			<h3 style="text-align:center;">${res.Genre}</h3>
			<h3 style="text-align:center;">${res.Writer}</h3>


		`;
		$('#app').html(html);
	});
	

