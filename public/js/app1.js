$('#app').html(`
	<div class="progress">
    <div class="indeterminate"></div>
	</div>
`);


setTimeout(function(){	//**preloader to wait 0.7secs to load the inside the body
	y();
},777);

function y(){


$.ajax({
		url: "http://www.omdbapi.com/?t=gotham&Season=1"
		
	}).done(function(ret){
		console.log(ret);
		let html = `

		<h1 style="font-size:2800%; font-family:Impact;">${ret.Title}</h1>
		<h2 style="font-size:1500%; font-family:Impact; text-align:center">Season ${ret.Season}</h2>

  <center> <img src="img/Season_1_poster.png" ></center>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[0].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[0].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[0].Released}</h4>


<h2 style="font-size:666%; font-family:Verdana; text-align:center"">${ret.Episodes[1].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[1].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[1].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[2].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[2].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[2].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[3].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[3].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[3].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[4].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[4].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[4].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[5].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[5].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[5].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[6].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[6].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[6].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[7].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[7].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[7].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[8].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[8].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[8].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[9].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[9].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[9].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[10].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[10].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[10].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[11].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[11].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[11].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[12].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[12].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[12].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[13].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[13].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[13].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[14].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[14].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[14].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[15].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[15].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[15].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[16].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[16].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[16].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[17].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[17].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[17].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[18].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[18].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[18].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[19].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[19].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[19].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[20].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[20].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[20].Released}</h4>

		<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[21].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[21].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[21].Released}</h4>


<h2 style="font-size:666%; font-family:Verdana; text-align:center">${ret.Episodes[22].Title}</h2>
		<h4 style="text-align:center">Episode : ${ret.Episodes[22].Episode}</h4>
		<h4 style="text-align:center">Released : ${ret.Episodes[22].Released}</h4>



		`;
		$('#app').html(html);
	});
}