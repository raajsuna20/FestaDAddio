const invitedNames = [
    "Abhinav Mohanty", "Aditya Khara", "Aditya Pujari", "Aniket Pradhan", "Anurag Patnaik",
    "Atulya Kumar Batra", "A. Tarun", "Binit Kumar Bhuyan", "Bhargav Yoroda", "Chetan Biswal",
    "Debansh Partnaik", "Evanjali Bagh", "G. Priyanka Rao", "G. Smruti", "G. Vara Prasad",
    "Haimanti Haldar", "Hosiyannah Bagh", "Humera Fatima", "Joshua Prayal Khorar", "Kaushik Kumar Bissoi",
    "Living Stone Khosla", "Manas Ranjan Khillo", "Mousumi Kirsani", "Neha Padhi", "Nishant Kumar",
    "Om Shankar Jena", "Om Subham Jena", "Parthiv Panda", "Pawan Kumar Behra", "Pragyan Parmita Nayak",
    "Pratik Khosla", "Pratyush Kumar Dalai", "Priyaranjan Tarini", "Pruthiv Raj Parida", "Rakesh Kumar Nag",
    "Rashmi Rekha Partnaik", "Rutuvee Patra", "Sameer Patthaik", "Shaik Nilofer Begum", "Shrusti Sanjeevani",
    "Shruti Patro", "SK Bashiruddin", "Smruti Rekha Sethy", "Sneha Sharma", "Solomon Dai",
    "Sonali Bagh", "Sunemia Khora", "U Sravan Kumar"
];

const form = document.getElementById("invitationForm");
const nameInput = document.getElementById("nameInput");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const balloonsContainer = document.getElementById("balloons");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (invitedNames.includes(name)) {
        popupMessage.textContent = `YOU ARE INVITED TO FESTA D'ADDIO, ${name}!`;
        showPopup();
    } else {
        alert("Sorry, you are not on the guest list.");
    }
    nameInput.value = "";
});

function showPopup() {
    popup.classList.remove("hidden");
    popup.style.display = "block";
    createBalloons();
    setTimeout(() => {
        popup.style.display = "none";
        popup.classList.add("hidden");
    }, 5000);
}

function createBalloons() {
    balloonsContainer.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
        balloonsContainer.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFF233"];
    return colors[Math.floor(Math.random() * colors.length)];
}
