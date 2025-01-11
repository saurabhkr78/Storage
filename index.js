import { ChessFileStorage } from './src/ChessFileStorage.js';
import { ChessDecoder } from './src/ChessDecoder.js';

// Example usage
const chessStorage = new ChessFileStorage();
const chessDecoder = new ChessDecoder();

// Store a file
const fileContent = "Hello, this is a secret message!";
const chessMoves = chessStorage.encodeFileToMoves(fileContent);
console.log("\nEncoded Chess Moves:", chessMoves);

// Decode with detailed analysis
const decodedAnalysis = chessDecoder.decodeWithAnalysis(chessMoves);

// Print detailed analysis
console.log("\n=== Decoded Analysis ===");
console.log("Original Content:", decodedAnalysis.decodedContent);
console.log("\nMove Statistics:");
console.log(`Total Moves: ${decodedAnalysis.analysis.totalMoves}`);
console.log(`Unique Moves: ${decodedAnalysis.analysis.uniqueMoves}`);
console.log(`Valid Moves: ${decodedAnalysis.analysis.isValid}`);

console.log("\nMove Frequency:");
Object.entries(decodedAnalysis.analysis.moveFrequency)
    .forEach(([move, count]) => {
        console.log(`${move}: ${count} times`);
    });

console.log("\nMove Pairs (Byte Representation):");
decodedAnalysis.analysis.movePairs.forEach(pair => {
    console.log(`${pair.moves.join(' ')} -> ${pair.representedByte}`);
}); 