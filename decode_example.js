import { ChessFileStorage } from './src/ChessFileStorage.js';
import { ChessDecoder } from './src/ChessDecoder.js';

// First, let's create a message and encode it
const chessStorage = new ChessFileStorage();
const originalMessage = "Hello World!";
const encodedMoves = chessStorage.encodeFileToMoves(originalMessage);

console.log("\nOriginal Message:", originalMessage);
console.log("Encoded Chess Moves:", encodedMoves);

// Now let's decode it using ChessDecoder
const decoder = new ChessDecoder();

// Method 1: Quick decode (just get the message)
const simpleDecoded = decoder.decodeToText(encodedMoves);
console.log("\nSimple Decoded Message:", simpleDecoded);

// Method 2: Get full analysis
const analysis = decoder.decodeWithAnalysis(encodedMoves);

// Print the detailed analysis
console.log("\n=== Detailed Analysis ===");
console.log("Decoded Content:", analysis.decodedContent);
console.log("Total Chess Moves:", analysis.analysis.totalMoves);
console.log("Number of Unique Moves:", analysis.analysis.uniqueMoves);
console.log("All Moves Valid:", analysis.analysis.isValid);

// Show how the moves were used
console.log("\nMove Frequency Analysis:");
Object.entries(analysis.analysis.moveFrequency)
    .forEach(([move, count]) => {
        console.log(`${move}: used ${count} time(s)`);
    });

// Show byte representation
console.log("\nByte Representation:");
analysis.analysis.movePairs.forEach(pair => {
    console.log(`Chess Moves: ${pair.moves[0]} ${pair.moves[1]} = Byte: ${pair.representedByte}`);
}); 