// Create an AudioContext
let audioContext = new AudioContext();

// Create a (first-order Ambisonic) Resonance Audio scene and pass it
// the AudioContext.
let resonanceAudioScene = new ResonanceAudio(audioContext);

// Connect the scene’s binaural output to stereo out.
resonanceAudioScene.output.connect(audioContext.destination);

// Define room dimensions.
// By default, room dimensions are undefined (0m x 0m x 0m).
let roomDimensions = {
  width: 3701,
  height: 11265,
  depth: 21565,
};

// Define materials for each of the room’s six surfaces.
// Room materials have different acoustic reflectivity.
let roomMaterials = {
  // Room wall materials FIGURE WHAT MATERIALS TO USE 
  left: 'brick-bare',
  right: 'curtain-heavy',
  front: 'marble',
  back: 'glass-thin',
  // Room floor
  down: 'concrete-block-coarse',
  // Room ceiling
  up: 'transparent',
};

// Add the room definition to the scene.
resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

// Create an AudioElement.
let audioElement = document.createElement('audio');

// Load an audio file into the AudioElement.
audioElement.src = 'drumadics.wav';

// Generate a MediaElementSource from the AudioElement.
let audioElementSource = audioContext.createMediaElementSource(audioElement);

// Add the MediaElementSource to the scene as an audio input source.
let source = resonanceAudioScene.createSource();
audioElementSource.connect(source.input);

// Set the source position relative to the room center (source default position).
source.setPosition(-0.707, -0.707, 0); //set position to subway stations

// Play the audio.
audioElement.play();