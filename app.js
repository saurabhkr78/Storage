// Chess-based File Storage System

class ChessFileStorage {
    constructor() {
        this.moveMapping = {
            '0': 'e4',
            '1': 'd4', 
            '2': 'Nf3',
            '3': 'Nc3',
            '4': 'e3',
            '5': 'd3',
            '6': 'c4',
            '7': 'f4',
            '8': 'g3',
            '9': 'b3',
            'a': 'h3',
            'b': 'a3',
            'c': 'Nh4',
            'd': 'Na3',
            'e': 'h4',
            'f': 'a4'
        };
    }

    encodeFileToMoves(fileData) {
        const bytes = new TextEncoder().encode(fileData);
        let moves = [];
        
        for (let byte of bytes) {
            // Convert each byte to hex and map to chess moves
            const hex = byte.toString(16).padStart(2, '0');
            moves.push(this.moveMapping[hex[0]], this.moveMapping[hex[1]]);
        }
        
        return moves.join(' ');
    }

    decodeMoveToFile(moves) {
        const moveArray = moves.split(' ');
        let hexString = '';
        
        // Convert moves back to hex representation
        for (let i = 0; i < moveArray.length; i += 2) {
            const firstNibble = Object.keys(this.moveMapping)
                .find(key => this.moveMapping[key] === moveArray[i]);
            const secondNibble = Object.keys(this.moveMapping)
                .find(key => this.moveMapping[key] === moveArray[i + 1]);
            
            hexString += firstNibble + secondNibble;
        }
        
        // Convert hex string back to bytes and then to text
        const bytes = new Uint8Array(hexString.match(/.{2}/g)
            .map(byte => parseInt(byte, 16)));
        return new TextDecoder().decode(bytes);
    }
}

// Example usage:
const chessStorage = new ChessFileStorage();

// Store a file
const fileContent = "Hello, this is a secret message!";
const chessMoves = chessStorage.encodeFileToMoves(fileContent);
console.log("Chess moves:", chessMoves);

// Retrieve the file
const retrievedContent = chessStorage.decodeMoveToFile(chessMoves);
console.log("Retrieved content:", retrievedContent);
