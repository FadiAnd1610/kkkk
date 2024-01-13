//אני יוצר פה מספר רנדומלי בין 1 ל 6
var randomNum = Math.random() * 6 + 1;
randomNum = Math.floor(randomNum);
//אני יוצר משתנה שהשם שלא זה אחת מהתמונות שלנו אבל עם מספר רנדומלי באמצע
var result = "dice" + randomNum + ".png";
var randomImg = "./images/" + result;
//פה אני בוחר את התמונה ה 1
var Img1 = document.querySelectorAll("img")[0];
//פה אני מגדיר איזה *תכונה* אני רוצה לשנות ואני שם במקום את המשתנה שהשם שלו זה כמו אחת מהתמונות
Img1.setAttribute("src", randomImg);

// פה זה אותו תהליך כמו לקוביה הראשונה
var randomNum2 = Math.random() * 6 +1;
randomNum2 = Math.floor(randomNum2);

var result2 = "dice" + randomNum2 + ".png";
var randomImg2 = "./images/" + result2;


var Img2 = document.querySelectorAll("img")[1];
Img2.setAttribute("src", randomImg2);

if (randomNum > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Win 🏆🏆🏆(go practice 💩)";
}
else if (randomNum2 > randomNum) {
    document.querySelector("h1").textContent = "Player 2 Win 🔥🔥🔥 (go practice 🤡)";
}
else {
    document.querySelector("h1").textContent = "U both sucks";
}
