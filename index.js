const imageElement = document.getElementById('myImage');
const buttonElement = document.getElementById('changeImageBtn');

buttonElement.addEventListener('click', function() {
    imageElement.src = 'steph2.jfif';
    imageElement.alt = 'A different image';
    buttonElement.textContent = 'Image Changed';
});

const imageElement2 = document.getElementById('myImage1');
const buttonElement2 = document.getElementById('changeImageBtn1');

buttonElement2.addEventListener('click', function() {
    imageElement2.src = 'lebron2.jfif';
    imageElement2.alt = 'A different image';
    buttonElement2.textContent = 'Image Changed';
});

const imageElement3 = document.getElementById('myImage2');
const buttonElement3 = document.getElementById('changeImageBtn2');

buttonElement3.addEventListener('click', function() {
    imageElement3.src = 'klay1.jfif';
    imageElement3.alt = 'A different image';
    buttonElement3.textContent = 'Image Changed';
});

const videoElement = document.getElementById('myVideo');
const videoButton = document.getElementById('changeVideoBtn');

videoButton.addEventListener('click', function() {
    videoElement.src = 'edi.mp4';
    videoElement.load();
    videoButton.textContent = 'Video Changed';
});

const videoElement2 = document.getElementById('myVideo1');
const videoButton2 = document.getElementById('changeVideoBtn1');

videoButton2.addEventListener('click', function() {
    videoElement2.src = 'edi.mp4';
    videoElement2.load();
    videoButton2.textContent = 'Video Changed';
});

const videoElement3 = document.getElementById('myVideo2');
const videoButton3 = document.getElementById('changeVideoBtn2');

videoButton3.addEventListener('click', function() {
    videoElement3.src = 'edi.mp4';
    videoElement3.load();
    videoButton3.textContent = 'Video Changed';
});
