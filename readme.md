# Chess Message Encoder/Decoder

A unique steganography system that converts text messages into chess moves and vice versa. This project includes both a web interface and command-line tools for encoding and decoding messages.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [File Descriptions](#file-descriptions)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

## Project Overview

This system converts text messages into sequences of chess moves using a unique mapping system. Each byte of text is converted into two chess moves, allowing messages to be hidden within what appears to be a normal sequence of chess moves.

### Key Features
- Text to chess moves encoding
- Chess moves to text decoding
- Web-based user interface
- Detailed move analysis
- Copy-to-clipboard functionality
- Move validation

## Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)
- A modern web browser

### Installation Steps

1. Create project directory:
mkdir chess-encoder
cd chess-encoder

2. Create the following directory structure:
chess-encoder/
├── src/
│ ├── ChessFileStorage.js
│ ├── ChessDecoder.js
│ ├── MoveMapping.js
│ └── utils/
│ └── ByteConverter.js
├── index.html
└── package.json

3. Initialize npm project and install dependencies:
npm init -y
npm install --save-dev http-server


4. Update package.json:
json
{
"name": "chess-encoder",
"version": "1.0.0",
"type": "module",
"scripts": {
"start": "http-server -c-1"
},
"devDependencies": {
"http-server": "^14.1.1"
}
}



## Project Structure

### Core Files
- `src/ChessFileStorage.js` - Main encoding logic
- `src/ChessDecoder.js` - Decoding and analysis functionality
- `src/MoveMapping.js` - Chess move definitions
- `src/utils/ByteConverter.js` - Byte conversion utilities
- `index.html` - Web interface

## Usage Guide

### Starting the Application

1. Start the server:
npm start
2.Open your browser and navigate to:
http://localhost:8080


### Using the Web Interface

#### Encoding Messages
1. Click the "Encode" tab
2. Enter your message in the text area
3. Click "Encode to Chess Moves"
4. View the encoded moves and analysis
5. Use "Copy Moves" button to copy the encoded sequence

#### Decoding Messages
1. Click the "Decode" tab
2. Paste the chess moves sequence
3. Click "Decode Message"
4. View the decoded message and analysis


