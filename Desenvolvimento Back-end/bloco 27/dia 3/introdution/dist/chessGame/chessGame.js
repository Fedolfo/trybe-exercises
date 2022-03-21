"use strict";
const boardColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // parte horizontal do xadrez
const boardRows = ['1', '2', '3', '4', '5', '6', '7', '8']; // parte vertical do xadrez
const isInList = (element, list) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1])
            return true;
    return false;
};
class Piece {
    // constructor retendo o array de column e row BoardHouse, podendo escrever
    // e o segundo parâmetro protegido, para apenas sublasses poder usar fora do mundo externo
    constructor(position, board) {
        this.board = board;
        this._position = position;
    }
    ;
    get position() { return this._position; } // posições dos dois arrays
    move(newPosition) {
        console.log(`MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`);
        // verifica a posição do array que o usuario coloca, newPosition(['c', 3]), caso não existir a coluna e os números verticais que existe no tabuleiro
        // o metodo avaliador de movimentos, com o tipo BoardHouse(column, raw) for ['i', 1] entra no if de negação e retorna falso
        // caso existir essa posição envia a peça para a posição.
        if (!isInList(newPosition, this.availableMoves))
            return false;
        this._position = newPosition;
        return true;
    }
}
class Pawn extends Piece {
    constructor() {
        super(...arguments);
        this.type = 'Peão'; // Class peça existe o tipo Type, podendo colocar a peça que desejar do xadrez
    }
    get availableMoves() {
        const column = this.position[0]; // recupera o array de coluna de BoardHouse, alocando a sua posição no xadrez  ['A']
        console.log(column, ' column');
        const row = this.position[1]; // recupera o array horizontal de BoardHouse, alocando a sua posição no xadrez [2]
        console.log(row, 'linha');
        const rowIndex = boardRows.indexOf(row); //
        console.log(rowIndex, 'rownI');
        if (rowIndex === 7) // se o index da linha for igual a sete, retorna um array vazio
            return [];
        //  tipagem de BoardHouse, onde o array de column e linha verificando a corrência de rowIndex contando
        //	com mais um da linha de xadrez
        const nextHouse = [column, boardRows[rowIndex + 1]];
        // se na lista da proxima casa do xadrez(nextHouse),  estiver com a casa ocupada com alguma peça retorna array vázio
        if (isInList(nextHouse, this.board.occupiedHouses))
            return [];
        // caso não estiver ocupado retorna o array do peão para o xadrez
        return [nextHouse];
    }
}
class Root extends Piece {
    constructor() {
        super(...arguments);
        this.type = "Torre";
    }
    get availableMoves() {
        const column = this.position[0];
        const columnIndex = boardColumns.indexOf(column);
        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);
        let availableHouses = [];
        // Adiciona todas as casas abaixo
        for (let i = rowIndex - 1; i >= 0; i--) {
            const house = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(house, this.board.occupiedHouses))
                break;
            availableHouses.push(house);
        }
        // Adiciona todas as casas acima
        for (let i = rowIndex + 1; i < 8; i++) {
            const house = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(house, this.board.occupiedHouses))
                break;
            if (isInList(house, availableHouses))
                continue;
            availableHouses.push(house);
        }
        // Adiciona todas as casas na direita
        for (let i = columnIndex + 1; i < 8; i++) {
            const house = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses))
                break;
            if (isInList(house, availableHouses))
                continue;
            availableHouses.push(house);
        }
        // Adiciona todas as casas na esquerda
        for (let i = columnIndex - 1; i >= 0; i--) {
            const house = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses))
                break;
            if (isInList(house, availableHouses))
                continue;
            availableHouses.push(house);
        }
        return availableHouses;
    }
}
class Board {
    constructor() {
        this.pieces = [];
        this.addPiece(new Pawn(['C', '2'], this));
        this.addPiece(new Root(['F', '1'], this));
    }
    addPiece(piece) {
        if (isInList(piece.position, this.occupiedHouses))
            return;
        this.pieces.push(piece);
    }
    get occupiedHouses() {
        return this.pieces.map((piece) => piece.position);
    }
}
let piece;
const board = new Board();
console.log(board);
const logPieceInfo = (piece) => {
    console.log(`----------------------
Peça: ${piece.type}
Posição: ${piece.position}
Movimentos disponíveis: ${piece.availableMoves.map((b) => "[" + b + "]")}
Posições ocupadas no tabuleiro: ${board.occupiedHouses}`);
};
piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '3']);
piece = board.pieces[1];
logPieceInfo(piece);
piece.move(['F', '3']);
logPieceInfo(piece);
piece.move(['A', '3']);
logPieceInfo(piece);
piece = board.pieces[0];
logPieceInfo(piece);
piece.move(['C', '4']);
logPieceInfo(piece);
piece.move(['C', '5']);
logPieceInfo(piece);
piece.move(['C', '6']);
logPieceInfo(piece);
piece.move(['C', '7']);
logPieceInfo(piece);
piece.move(['C', '8']);
logPieceInfo(piece);
/*
Saída:
<ref *1> Board {
  pieces: [
    Pawn { board: [Circular *1], _position: [Array], type: 'Peão' },
    Root { board: [Circular *1], _position: [Array], type: 'Torre' }
  ]
}
----------------------
Peça: Peão
Posição: C,2
Movimentos disponíveis: [C,3]
Posições ocupadas no tabuleiro: C,2,F,1
MOVENDO Peão DA CASA C,2 PARA A CASA C,3
----------------------
Peça: Torre
Posição: F,1
Movimentos disponíveis: [F,2],[F,3],[F,4],[F,5],[F,6],[F,7],[F,8],[G,1],[H,1],[E,1],[D,1],[C,1],[B,1],[A,1]
Posições ocupadas no tabuleiro: C,3,F,1
MOVENDO Torre DA CASA F,1 PARA A CASA F,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Torre DA CASA F,3 PARA A CASA A,3
----------------------
Peça: Torre
Posição: F,3
Movimentos disponíveis: [F,2],[F,1],[F,4],[F,5],[F,6],[F,7],[F,8],[G,3],[H,3],[E,3],[D,3]
Posições ocupadas no tabuleiro: C,3,F,3
----------------------
Peça: Peão
Posição: C,3
Movimentos disponíveis: [C,4]
Posições ocupadas no tabuleiro: C,3,F,3
MOVENDO Peão DA CASA C,3 PARA A CASA C,4
----------------------
Peça: Peão
Posição: C,4
Movimentos disponíveis: [C,5]
Posições ocupadas no tabuleiro: C,4,F,3
MOVENDO Peão DA CASA C,4 PARA A CASA C,5
----------------------
Peça: Peão
Posição: C,5
Movimentos disponíveis: [C,6]
Posições ocupadas no tabuleiro: C,5,F,3
MOVENDO Peão DA CASA C,5 PARA A CASA C,6
----------------------
Peça: Peão
Posição: C,6
Movimentos disponíveis: [C,7]
Posições ocupadas no tabuleiro: C,6,F,3
MOVENDO Peão DA CASA C,6 PARA A CASA C,7
----------------------
Peça: Peão
Posição: C,7
Movimentos disponíveis: [C,8]
Posições ocupadas no tabuleiro: C,7,F,3
MOVENDO Peão DA CASA C,7 PARA A CASA C,8
----------------------
Peça: Peão
Posição: C,8
Movimentos disponíveis:
Posições ocupadas no tabuleiro: C,8,F,3
*/ 
