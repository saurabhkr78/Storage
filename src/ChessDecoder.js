import { moveMapping } from './MoveMapping.js';
import { ByteConverter } from './utils/ByteConverter.js';

export class ChessDecoder {
    constructor() {
        this.moveMapping = moveMapping;
    }

    /**
     * Decodes chess moves and provides detailed analysis
     * @param {string} moves - Space-separated chess moves
     * @returns {Object} Decoded information and analysis
     */
    decodeWithAnalysis(moves) {
        const moveArray = moves.split(' ');
        
        return {
            originalMoves: moves,
            decodedContent: this.decodeToText(moves),
            analysis: {
                totalMoves: moveArray.length,
                moveFrequency: this.analyzeMoveFrequency(moveArray),
                isValid: this.validateMoves(moveArray),
                uniqueMoves: new Set(moveArray).size,
                movePairs: this.analyzePairs(moveArray)
            },
            hexRepresentation: this.movesToHex(moveArray)
        };
    }

    /**
     * Decodes moves directly to text
     * @param {string} moves - Space-separated chess moves
     * @returns {string} Decoded text
     */
    decodeToText(moves) {
        const moveArray = moves.split(' ');
        const hexString = moveArray
            .map(move => Object.keys(this.moveMapping)
                .find(key => this.moveMapping[key] === move))
            .join('');

        const bytes = ByteConverter.hexToBytes(hexString);
        return ByteConverter.bytesToText(bytes);
    }

    /**
     * Analyzes frequency of each chess move
     * @param {string[]} moveArray - Array of chess moves
     * @returns {Object} Move frequency analysis
     */
    analyzeMoveFrequency(moveArray) {
        return moveArray.reduce((freq, move) => {
            freq[move] = (freq[move] || 0) + 1;
            return freq;
        }, {});
    }

    /**
     * Validates if all moves are valid chess moves
     * @param {string[]} moveArray - Array of chess moves
     * @returns {boolean} Whether all moves are valid
     */
    validateMoves(moveArray) {
        return moveArray.every(move => 
            Object.values(this.moveMapping).includes(move)
        );
    }

    /**
     * Analyzes pairs of moves (representing bytes)
     * @param {string[]} moveArray - Array of chess moves
     * @returns {Object[]} Analysis of move pairs
     */
    analyzePairs(moveArray) {
        const pairs = [];
        for (let i = 0; i < moveArray.length; i += 2) {
            if (moveArray[i + 1]) {
                pairs.push({
                    moves: [moveArray[i], moveArray[i + 1]],
                    representedByte: this.movePairToHex(moveArray[i], moveArray[i + 1])
                });
            }
        }
        return pairs;
    }

    /**
     * Converts a pair of moves to their hex representation
     * @param {string} move1 - First chess move
     * @param {string} move2 - Second chess move
     * @returns {string} Hex representation
     */
    movePairToHex(move1, move2) {
        const firstNibble = Object.keys(this.moveMapping)
            .find(key => this.moveMapping[key] === move1);
        const secondNibble = Object.keys(this.moveMapping)
            .find(key => this.moveMapping[key] === move2);
        
        return firstNibble + secondNibble;
    }

    /**
     * Converts moves to hex string
     * @param {string[]} moveArray - Array of chess moves
     * @returns {string} Hex representation
     */
    movesToHex(moveArray) {
        return moveArray
            .map(move => Object.keys(this.moveMapping)
                .find(key => this.moveMapping[key] === move))
            .join('');
    }
} 