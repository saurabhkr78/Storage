import { ChessDecoder } from './src/ChessDecoder.js';

// Example of decoding a message
const encodedMoves = "e4 d4 Nf3 Nc3 e3 d3 c4 f4"; // This is just an example
const decoder = new ChessDecoder();

// Get just the message
const quickDecode = decoder.decodeToText(encodedMoves);
console.log("Message:", quickDecode);

// Or get full analysis
const fullAnalysis = decoder.decodeWithAnalysis(encodedMoves);
console.log("Full analysis:", fullAnalysis); 