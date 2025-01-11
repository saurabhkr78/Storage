/**
 * Utility class for handling byte conversions
 */
export class ByteConverter {
    static textToBytes(text) {
        return new TextEncoder().encode(text);
    }

    static bytesToText(bytes) {
        return new TextDecoder().decode(bytes);
    }

    static bytesToHex(bytes) {
        return Array.from(bytes)
            .map(byte => byte.toString(16).padStart(2, '0'))
            .join('');
    }

    static hexToBytes(hexString) {
        return new Uint8Array(
            hexString.match(/.{2}/g)
                .map(byte => parseInt(byte, 16))
        );
    }
} 