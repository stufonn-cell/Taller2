const speech = document.querySelector("#pokemon-speech-container");
const SPEECH_BUBBLE = document.querySelector("#speech-image");

const WHOS_THAT_AUDIO = document.querySelector("#whos_that");
const POKEMON_AUDIO = document.querySelector("#pokemon_audio");
const POKEMON_NAME = document.querySelector("#pokemon-name");

WHOS_THAT_AUDIO.addEventListener("ended", () => {
    speech.style.animation = "fadein 2s";
    speech.style.filter = "brightness(1)";
    SPEECH_BUBBLE.style.visibility = "visible";
    POKEMON_NAME.style.opacity = 1;
    POKEMON_AUDIO.play();
});