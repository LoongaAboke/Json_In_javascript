const CallingJson = new Request("sample.json");

fetch(CallingJson).then(response => response.json()).then(data => {

	localStorage.setItem("sampleJ", data.Home.Rooms)
  console.log(localStorage)
}).catch(console.error);
