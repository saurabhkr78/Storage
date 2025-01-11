import { ChessDecoder } from './src/ChessDecoder.js';

// The chess moves you want to decode
const chessMoves = "e4 d4 Nf3 h3 ..."; // Your encoded chess moves here

const decoder = new ChessDecoder();
const analysis = decoder.decodeWithAnalysis(chessMoves);

// Print the results
console.log("\n=== Decoded Analysis ===");
console.log("Original Content:", analysis.decodedContent);
console.log("\nMove Statistics:");
console.log(`Total Moves: ${analysis.analysis.totalMoves}`);
console.log(`Unique Moves: ${analysis.analysis.uniqueMoves}`);
console.log(`Valid Moves: ${analysis.analysis.isValid}`);

// See move frequency
console.log("\nMove Frequency:");
Object.entries(analysis.analysis.moveFrequency)
    .forEach(([move, count]) => {
        console.log(`${move}: ${count} times`);
    });

// See how moves pair up to represent bytes
console.log("\nMove Pairs (Byte Representation):");
analysis.analysis.movePairs.forEach(pair => {
    console.log(`${pair.moves.join(' ')} -> ${pair.representedByte}`);
}); 