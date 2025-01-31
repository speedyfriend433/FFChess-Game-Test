const board = document.getElementById('chessboard');
const pieces = {
    'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔', 'p': '♙',
    'R': '♜', 'N': '♞', 'B': '♝', 'Q': '♛', 'K': '♚', 'P': '♟'
};

let selectedPiece = null;
let selectedSquare = null;

function initBoard() {
    const initialPosition = [
        'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
        'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
        'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'
    ];

    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square ' + ((Math.floor(i / 8) + i) % 2 === 0 ? 'white' : 'black');
        square.dataset.index = i;

        if (initialPosition[i]) {
            const piece = document.createElement('div');
            piece.className = 'piece';
            piece.innerText = pieces[initialPosition[i]];
            piece.dataset.piece = initialPosition[i];
            square.appendChild(piece);
        }

        square.addEventListener('click', () => selectSquare(square));
        board.appendChild(square);
    }
}

function selectSquare(square) {
    const piece = square.querySelector('.piece');

    if (selectedPiece) {
        if (piece) {
            alert("You can't move to a square that has your piece!");
        } else {
            square.appendChild(selectedPiece);
            selectedSquare.appendChild(null);
            selectedPiece = null;
            selectedSquare = null;
        }
    } else if (piece) {
        selectedPiece = piece;
        selectedSquare = square;
    }
}

initBoard();
