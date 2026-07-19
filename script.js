// ===============================
// Dhiraj Kumar Portfolio
// ===============================

console.log("🚀 Welcome to Dhiraj Kumar Portfolio");

window.addEventListener("load", () => {

    console.log("Portfolio Loaded Successfully ✅");

    // Hero animation
    document.querySelector(".hero").style.opacity = "1";

});

// Smooth scroll for navbar links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// Download Resume Button

const resumeBtn = document.querySelector(".btn");

if(resumeBtn){

    resumeBtn.addEventListener("click", () => {

        console.log("📄 Resume Download Clicked");

    });

}
