// function getDogImg() {
//   const xhrRequest = new XMLHttpRequest();
//   const dogImg = document.getElementById("dog-img");

//   xhrRequest.onload = () => {
//     console.log(xhrRequest.response);
//     const response = JSON.parse(xhrRequest.response);
//     dogImg.src = response.message
//   };

//   xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random");
//   xhrRequest.send();
// }
// getDogImg();
