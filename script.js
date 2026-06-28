// =============================
// Pages
// =============================

const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index) {

    pages.forEach(page => page.classList.remove("active"));

    pages[index].classList.add("active");

    currentPage = index;

}

// =============================
// Music
// =============================

const music = document.getElementById("bgMusic");

// =============================
// Letter Text
// =============================

const letterText = `

Happy Birthday My Dear Sister ❤️

Today is all about you.

Thank you for always making everyone smile.

May your life be filled with happiness,
good health,
love,
success,
and endless laughter.

I hope every dream you have comes true.

Always keep smiling because your smile makes everyone happy.

Love You Forever ❤️

`;

let letterIndex = 0;

function typeLetter(){

    if(letterIndex < letterText.length){

        document.getElementById("letterText").innerHTML += letterText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,40);

    }

}

// =============================
// Floating Hearts
// =============================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// =============================
// Stars
// =============================

function createStars(){

    const stars=document.getElementById("stars");

    for(let i=0;i<70;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*2+"s";

        stars.appendChild(star);

    }

}

createStars();

// =============================
// Start Button
// =============================

document.getElementById("startBtn").onclick=function(){

    music.play();

    showPage(1);

}

// =============================
// Envelope
// =============================

document.getElementById("openEnvelope").onclick=function(){

    document.getElementById("envelope").src="assets/image/open-envelope.png";

    setTimeout(()=>{

        showPage(2);

        typeLetter();

    },1500);

}

// =============================
// Cake
// =============================

document.getElementById("nextToCake").onclick=function(){

    showPage(3);

}

document.getElementById("blowBtn").onclick=function(){

    alert("🎉 Candle Blown!\n\nMay all your wishes come true ❤️");

    showPage(4);

}

// =============================
// Age
// =============================

document.getElementById("submitAge").onclick=function(){

    const age=document.getElementById("ageInput").value;

    if(age==""){

        alert("Please enter your age 😊");

        return;

    }

    document.getElementById("ageMessage").innerHTML=

    "🎈 Wow! "+age+" years of spreading happiness! ❤️";

    setTimeout(()=>{

        showPage(5);

    },2200);

}

// =============================
// Final
// =============================

document.getElementById("finalBtn").onclick=function(){

    showPage(6);

}