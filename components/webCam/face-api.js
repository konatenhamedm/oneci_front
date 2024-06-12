import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';

// Load face detection, face landmark, and face recognition models
export const loadModels = async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
};

// Perform face detection
export const detect = async (imageSrc) => {
  // Load image
  const img = await faceapi.fetchImage(imageSrc);

  // Load models before inference
  await loadModels();

  // Detect faces
  return faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
};
