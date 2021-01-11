export default function initialiseChessBoard() {
  let isChangeSeq = false;
  let items = Array.apply(null, Array(64)).map((v, i) => {
    const squares = Array(64).fill(null);
    if (i > 7 && i % 8 == 0) {
      isChangeSeq = !isChangeSeq;
    }
    if (isChangeSeq) {
      color = i % 2 == 0 ? 'black' : 'white';
    } else {
      color = i % 2 == 0 ? 'white' : 'black';
    }

    if (i >= 8 && i < 16) {
      return {
        id: i,
        src: require('../assets/chess_piece_2_white_pawn.png'),
        color,
        isOccupied: true,
        player: 2,
        type: 'pawn',
      };
    } else if (i >= 48 && i < 56) {
      return {
        id: i,
        src: require('../assets/chess_piece_2_black_pawn.png'),
        color,
        isOccupied: true,
        player: 1,
        type: 'pawn',
      };
    } else {
      if (i == 0 || i == 7 || i == 56 || i == 63) {
        return {
          id: i,
          src:
            i < 8
              ? require('../assets/chess_piece_2_white_rook.png')
              : require('../assets/chess_piece_2_black_rook.png'),
          color,
          isOccupied: true,
          player: i < 8 ? 2 : 1,
          type: 'rook',
        };
      }
      if (i == 1 || i == 6 || i == 57 || i == 62) {
        return {
          id: i,
          src:
            i < 8
              ? require('../assets/chess_piece_2_white_knight.png')
              : require('../assets/chess_piece_2_black_knight.png'),
          color,
          isOccupied: true,
          player: i < 8 ? 2 : 1,
          type: 'knight',
        };
      }
      if (i == 2 || i == 5 || i == 58 || i == 61) {
        return {
          id: i,
          src:
            i < 8
              ? require('../assets/chess_piece_2_white_bishop.png')
              : require('../assets/chess_piece_2_black_bishop.png'),
          color,
          isOccupied: true,
          player: i < 8 ? 2 : 1,
          type: 'bishop',
        };
      }
      if (i == 4 || i == 60) {
        return {
          id: i,
          src:
            i < 8
              ? require('../assets/chess_piece_2_white_queen.png')
              : require('../assets/chess_piece_2_black_queen.png'),
          color,
          isOccupied: true,
          player: i < 8 ? 2 : 1,
          type: 'queen',
        };
      }
      if (i == 3 || i == 59) {
        return {
          id: i,
          src:
            i < 8
              ? require('../assets/chess_piece_2_white_king.png')
              : require('../assets/chess_piece_2_black_king.png'),
          color,
          isOccupied: true,
          player: i < 8 ? 2 : 1,
          type: 'king',
        };
      }
      return {
        id: i,
        color,
        isOccupied: false,

        //src: 'http://via.placeholder.com/50/000000?text=' + (i + 1),
      };
    }
  });

  return items;
}
