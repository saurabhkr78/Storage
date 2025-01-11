import { moveMapping } from './MoveMapping.js';
import { ByteConverter } from './utils/ByteConverter.js';

export class ChessFileStorage {
    constructor() {
        this.moveMapping = moveMapping;
    }

    encodeFileToMoves(fileData) {
        const bytes = ByteConverter.textToBytes(fileData);
        const hexString = ByteConverter.bytesToHex(bytes);
        const moves = [];

        for (let i = 0; i < hexString.length; i++) {
            moves.push(this.moveMapping[hexString[i]]);
        }

        return moves.join(' ');
    }

    decodeMoveToFile(moves) {
        const moveArray = moves.split(' ');
        const hexString = moveArray
            .map(move => Object.keys(this.moveMapping)
                .find(key => this.moveMapping[key] === move))
            .join('');

        const bytes = ByteConverter.hexToBytes(hexString);
        return ByteConverter.bytesToText(bytes);
    }

    validateMoves(moves) {
        const moveArray = moves.split(' ');
        return moveArray.every(move => 
            Object.values(this.moveMapping).includes(move)
        );
    }
} 