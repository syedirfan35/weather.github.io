let btn = document.getElementById("btn");
btn.addEventListener("click", findCity);
	function findCity(e){
		e.preventDefault();
		let cityName = document.getElementById("input").value;
		console.log(cityName);		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=1d1fb9a02a468a38f5977021825eb043`, true);

		xhr.onload = function(){
			if(this.readyState == 4 && this.status == 200){
				var data = JSON.parse(this.responseText);
				// console.log(data.list[0].main.temp)
				let currentTemp = document.getElementById("temp");
				currentTemp.innerHTML = `${toCelcius(data.list[0].main.temp)}<span>&#176</span>C`;

				let lowTemp = document.getElementById("lowTemp");
				lowTemp.innerHTML = `Low:${toCelcius(data.list[0].main.temp_min)}<span>&#176</span>C`;

				let highTemp = document.getElementById("highTemp");
				highTemp.innerHTML = `High:${toCelcius(data.list[0].main.temp_max)}<span>&#176</span>C/`;

				let cityName = document.getElementById("cityName");
				cityName.innerHTML = `${data.city['name']}, ${data.city['country']}`;

				let description = document.getElementById("description");
				description.innerHTML = `${data.list[0].weather[0].description}`

				let mainDesc = data.list[0].weather[0].main;
				console.log(mainDesc);

				let windSpeed = document.getElementById("wind");
				windSpeed.innerHTML = `Wind: ${toKmhr(data.list[0].wind.speed)} km/h.`;

				let humidity = document.getElementById("humidity");
				humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%.`

				let day1 = document.getElementById("day1");
				day1.innerHTML = `${(data.list[6].dt_txt).slice(0, 10)}`;

				let temp1 = document.getElementById("temp1");
				temp1.innerHTML = `${toCelcius(data.list[6].main.temp)}&#176C`;
				let mainDesc1 = data.list[6].weather[0].main;
				// console.log(mainDesc1);
				switch (mainDesc1) {
					case "Rain":
						$("#img1").css({"background-image":"url('images/rain.svg')"})
						break;
					case "Clouds":
						$("#img1").css({"background-image": "url('images/cloudy.svg')"});
						break;
					case "Clear":
						$("#img1").css({
							"background-image": "url('images/sun.svg')"
						});
						break;
					case "Snow":
						$("#img1").css({"background-image": "url('images/snow.svg')"})
						// $(".row").css({"color": "black"})
						break;
					case "Storm":
						$("#img1").css({"background-image": "url('images/storm.svg')"})					
					default:
						console.log("Sorry no image available");
						break;
				}

				let day2 = document.getElementById("day2");
				day2.innerHTML = `${(data.list[14].dt_txt).slice(0, 10)}`;

				let temp2 = document.getElementById("temp2");
				temp2.innerHTML = `${toCelcius(data.list[14].main.temp)}&#176C`;
				let mainDesc2 = data.list[14].weather[0].main;
				// console.log(mainDesc2)
				switch (mainDesc2) {
					case "Rain":
						$("#img2").css({"background-image":"url('images/rain.svg')"})
						break;
					case "Clouds":
						$("#img2").css({"background-image": "url('images/cloudy.svg')"});
						break;
					case "Clear":
						$("#img2").css({
							"background-image": "url('images/sun.svg')"
						});
						break;
					case "Snow":
						$("#img2").css({"background-image": "url('images/snow.svg')"})
						// $(".row").css({"color": "black"})
						break;
					case "Storm":
						$("#img2").css({"background-image": "url('images/storm.svg')"})					
					default:
						console.log("Sorry no image available");
						break;
				}

				let day3 = document.getElementById("day3");
				day3.innerHTML = `${(data.list[22].dt_txt).slice(0, 10)}`;

				let temp3 = document.getElementById("temp3");
				temp3.innerHTML = `${toCelcius(data.list[22].main.temp)}&#176C`;
				let mainDesc3 = data.list[22].weather[0].main;
				switch (mainDesc3) {
					case "Rain":
						$("#img3").css({"background-image":"url('images/rain.svg')"})
						break;
					case "Clouds":
						$("#img3").css({"background-image": "url('images/cloudy.svg')"});
						break;
					case "Clear":
						$("#img3").css({
							"background-image": "url('images/sun.svg')"
						});
						break;
					case "Snow":
						$("#img3").css({"background-image": "url('images/snow.svg')"})
						// $(".row").css({"color": "black"})
						break;
					case "Storm":
						$("#img3").css({"background-image": "url('images/storm.svg')"})					
					default:
						console.log("Sorry no image available");
						break;
				}


				let day4 = document.getElementById("day4");
				day4.innerHTML = `${(data.list[30].dt_txt).slice(0, 10)}`;

				let temp4 = document.getElementById("temp4");
				temp4.innerHTML = `${toCelcius(data.list[30].main.temp)}&#176C`;
				let mainDesc4 = data.list[30].weather[0].main;
				switch (mainDesc4) {
					case "Rain":
						$("#img4").css({"background-image":"url('images/rain.svg')"})
						break;
					case "Clouds":
						$("#img4").css({"background-image": "url('images/cloudy.svg')"});
						break;
					case "Clear":
						$("#img4").css({
							"background-image": "url('images/sun.svg')"
						});
						break;
					case "Snow":
						$("#img4").css({"background-image": "url('images/snow.svg')"})
						// $(".row").css({"color": "black"})
						break;
					case "Storm":
						$("#img4").css({"background-image": "url('images/storm.svg')"})					
					default:
						console.log("Sorry no image available");
						break;
				}


				let day5 = document.getElementById("day5");
				day5.innerHTML = `${(data.list[38].dt_txt).slice(0, 10)}`;

				let temp5 = document.getElementById("temp5");
				temp5.innerHTML = `${toCelcius(data.list[38].main.temp)}&#176C`;
				let mainDesc5 = data.list[38].weather[0].main;
				switch (mainDesc5) {
					case "Rain":
						$("#img5").css({"background-image":"url('images/rain.svg')"})
						break;
					case "Clouds":
						$("#img5").css({"background-image": "url('images/cloudy.svg')"});
						break;
					case "Clear":
						$("#img5").css({
							"background-image": "url('images/sun.svg')"
						});
						break;
					case "Snow":
						$("#img5").css({"background-image": "url('images/snow.svg')"})
						// $(".row").css({"color": "black"})
						break;
					case "Storm":
						$("#img5").css({"background-image": "url('images/storm.svg')"})					
					default:
						console.log("Sorry no image available");
						break;
				}

				switch (mainDesc) {
					case "Rain":
						$("#img").css({
							"background-image":"url('images/rain.svg')"
						})
						document.body.style.backgroundImage = "url('images/rain.jpg')";
						break;
					case "Clouds":
						document.body.style.backgroundImage = "url('images/clouds.jpg')";
						$("#img").css({
							"background-image": "url('images/cloudy.svg')"
						});

						break;
					case "Clear":
						$("#img").css({
							"background-image": "url('images/sun.svg')"
						});
						document.body.style.backgroundImage = "url('images/sunny.jpg')";
						break;

					case "Snow":
						document.body.style.backgroundImage = "url('images/snow.jpg')";
						$("#img").css({
							"background-image": "url('images/snow.svg')"
						})
						$(".row").css({
							"color": "black"
						})
						break;
					case "Storm":
						document.body.style.backgroundImage = "url('images/storm.jpg')";
						$("#img").css({
							"background-image": "url('images/storm.svg')"
						})
					// case ""						
					default:
						console.log("Sorry no image available");
						break;
				}
			}
		}
		xhr.send();			
	}

function toCelcius(k){
	let kelvin = k - 273;
	let kel = kelvin.toFixed(1);
	return kel;
}

function toKmhr(m){
	let km = m * 1.609;
	let kmhr = km.toFixed(2);
	return kmhr;
}

//6 day 1
//14 day 2
//22 day 3
//30 day 4
//38 day 5