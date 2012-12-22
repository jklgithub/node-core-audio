var coreAudio = require("./node-core-audio");

console.log( coreAudio );

// Initialize the audio engine
var output = [];
var audio = coreAudio.createNewAudioEngine(
    {
        inputChannels: 1,
        outputChannels: 6
    },
    function(input, lastInputOverflowed, lastOutputUnderflowed) {
        console.log("sweet");
        return output; //just copy input (mono) to each channel of our 5.1 output
    }
);