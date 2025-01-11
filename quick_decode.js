import { ChessDecoder } from './src/ChessDecoder.js';

// The chess moves you want to decode
const encodedMoves = "e3 g3 c4 d3 c4 Nh4 c4 Nh4 c4 a4 Nf3 Nh4 Nf3 e4 f4 e3 c4 g3 c4 b3 f4 Nc3 Nf3 e4 c4 b3 f4 Nc3 Nf3 e4 c4 d4 Nf3 e4 f4 Nc3 c4 d3 c4 Nc3 f4 Nf3 c4 d3 f4 e3 Nf3 e4 c4 Na3 c4 d3 f4 Nc3 f4 Nc3 c4 d4 c4 f4 c4 d3 Nf3 d4"; // Replace with your moves

const decoder = new ChessDecoder();

// Just get the message
const message = decoder.decodeToText(encodedMoves);
console.log("Decoded message:", message);

// Or get full analysis if you want details
const analysis = decoder.decodeWithAnalysis(encodedMoves);
console.log("Full analysis:", analysis); 