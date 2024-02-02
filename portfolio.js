var aboutSection = document.getElementById('about');
var contactSection = document.getElementById('contact');
var skillSection = document.getElementById('skil');
var backButton = document.querySelectorAll('.ba'); // Change to class selector

function about() {
    aboutSection.style.display = 'block';
    contactSection.style.display = 'none';
    skillSection.style.display = 'none';
}

function contact() {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'block';
    skillSection.style.display = 'none';
}

function skil() {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    skillSection.style.display = 'block';
}

function back() {
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    skillSection.style.display = 'none';
}

var aboutButton = document.querySelectorAll('.btn a:nth-of-type(2) button')[0]; // Corrected selector
var contactButton = document.querySelectorAll('.btn a:nth-of-type(3) button')[0]; // Corrected selector
var skillButton = document.querySelectorAll('.btn a:nth-of-type(4) button')[0]; // Corrected selector
var baButtons = Array.from(backButton); // Convert to array

aboutButton.addEventListener('click', about);
contactButton.addEventListener('click', contact);
skillButton.addEventListener('click', skil);

// Loop through all back buttons and add event listener
baButtons.forEach(function(button) {
    button.addEventListener('click', back);
});
