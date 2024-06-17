let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voices, i) => (voiceselect.options[i] = new Option(voices.name, i))
  );
};

voiceselect.addEventListener("change", () => {
  speech.voice = voices[voiceselect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

// 1) Create a talking object
// 2) voices will keep the list of all available voices.
// 3) voiceselect is the dropdown menu where you choose a voice.
// 4) window.speechSynthesis is the part of the browser that handles speech synthesis (making the computer talk).
// 5) .onvoiceschanged is an event that triggers when the list of voices changes or becomes available.
// 6) window.speechSynthesis.getVoices() gets the list of available voices from the browser.
// 7) speech.voice sets the voice for the speech object
// 8) voices[0] sets it to the first voice in the list. This means the default voice will be the first one available.
// 9) voices.forEach loops through each voice in the voices array
// 10) (voices, i) is a function that takes two parameters:
//  11) voices is the current voice in the loop.
//  12) i is the index (position) of the current voice in the array.
//  13) voiceselect.options[i] accesses the i-th option in the dropdown menu.
//  14) new Option(voices.name, i) creates a new option for the dropdown with: voices.name as the displayed text (the name of the voice) and i as the value (the index of the voice in the array).
//  15) speech.voice sets the voice property of the speech object (the talking puppet).
//  16) voices[voiceselect.value] uses this index to get the selected voice from the voices array and sets it as the voice for the speech object.
//
//
