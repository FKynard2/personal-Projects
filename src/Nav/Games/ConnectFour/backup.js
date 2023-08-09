// let cpmMove = Math.floor(Math.random() * board.length);
// const originalRandomCoIdx = cpmMove; // Store the original value
// const columnWithTwo = board.find((colEntries, colIdx) => {
//     let count = 0;
//     for (let i = 0; i < colEntries.length; i++) {
//         if (colEntries[i] === currentPlayer) {
//             count++;
//             if (count == 2) {
//                 console.log("yes");
//                 cpmMove = colIdx;
//                 return true;
//             }
//         } else {
//             count = 0;
//         }
//     }

//     return false;
// });
// const columnWithThree = board.find((colEntries) => {
//     let count = 0;
//     for (let i = 0; i < colEntries.length; i++) {
//         if (colEntries[i]) {
//             count++;
//             if (count == 3) {
//                 cpmMove = originalRandomCoIdx; // Reset back to the original value
//                 return true;
//             }
//         } else {
//             count = 0;
//         }
//     }

//     return false;
// });

// if (board[cpmMove].every((entry) => entry !== null)) {
//     while (board[cpmMove].every((entry) => entry !== null)) {
//         cpmMove = Math.floor(Math.random() * board.length);
//     }
// } else if (columnWithTwo === true && columnWithThree === false) {
//     cpmMove = board.indexOf(columnWithTwo);
// }


//    setTimeout(() => {
//        dispatchBoard({
//            type: "move",
//            colIdx: cpmMove,
//        });
//    }, 200);

//    const isBoardFull = boardClone.every((column) =>
//        column.every((value) => value != null)
//    );



//    //< This is for the AI

//    function makeAIMove(board, player) {
//        if (
//            !board ||
//            !Array.isArray(board) ||
//            board.length === 0 ||
//            player === 2
//        ) {
//            return;
//        }
//        // Clone the board to avoid modifying the original state
//        const boardClone = [...board];

//        // Call the minimax function to determine the best move for the AI player
//        const bestMove = getBestMove(boardClone, player);

//        // Make the AI player's move on the board
//        let randomIdx = Math.floor(Math.random() * 7);
//        let colIdx = bestMove;
//        let rowIdx = getEmptyRow(boardClone, colIdx);
//        //    console.log(bestMove);

//        // Return the updated board and the next player
//        // return {
//        //     board: boardClone,
//        //     currentPlayer: 3 - player,

//        // };
//        console.log(bestMove);

//        return bestMove;
//    }

//    function getBestMove(board, player) {
//        let bestScore = -Infinity;
//        let bestMove;

//        const availableMoves = generateMoves(board);

//        for (let move of availableMoves) {
//            const newBoard = makeMove(board, move, player);

//            const score = minimax(
//                newBoard,
//                4,
//                false,
//                player,
//                player,
//                -Infinity,
//                Infinity
//            );
//            console.log(score);
//            if (score > bestScore) {
//                bestScore = score;
//                bestMove = move;
//            }
//        }
//        return bestMove;
//    }

//    // Generate possible moves
//    function generateMoves(board) {
//        const moves = [];
//        for (let colIdx = 0; colIdx < NUM_COL; colIdx++) {
//            if (board[colIdx][NUM_ROW - 1] == null) {
//                moves.push(colIdx);
//            }
//        }

//        return moves;
//    }

//    // Make a move on the board
//    function makeMove(board, colIdx, player) {
//        const newBoard = [...board];
//        const rowIdx = getEmptyRow(newBoard, colIdx);
//        newBoard[colIdx][rowIdx] = player;

//        return {
//            board: newBoard,
//            currentPlayer: player === 1 ? 2 : 1,
//        };
//    }

//    // Helper function to get the row index of the first empty slot in a column
//    function getEmptyRow(board, colIdx) {
//        for (let rowIdx = NUM_ROW - 1; rowIdx >= 0; rowIdx--) {
//            if (board[colIdx][rowIdx] === null) {
//                console.log(colIdx);
//                return colIdx;
//            }
//        }
//        return -1; // Return -1 if the column is full
//    }

//    // Minimax algorithm with alpha-beta pruning
//    function minimax(
//        board,
//        depth,
//        maximizingPlayer,
//        player,
//        originalPlayer,
//        alpha,
//        beta
//    ) {
//        if (depth === 0) {
//            return evaluateBoard(board.board, originalPlayer);
//        }
//        player = board.currentPlayer;
//        if (maximizingPlayer) {
//            let maxScore = -Infinity;
//            const availableMoves = generateMoves(board.board);
//            for (let move of availableMoves) {
//                const newBoard = makeMove(board.board, move, player);
//                const score = minimax(
//                    newBoard,
//                    depth - 1,
//                    false,
//                    player,
//                    originalPlayer,
//                    alpha,
//                    beta
//                );

//                maxScore = Math.max(maxScore, score);
//                alpha = Math.max(alpha, score);
//                if (beta <= alpha) {
//                    break;
//                }
//            }
//            return maxScore;
//        } else {
//            let minScore = Infinity;
//            const availableMoves = generateMoves(board.board);

//            for (let move of availableMoves) {
//                const newBoard = makeMove(
//                    board.board,
//                    move,
//                    player === 1 ? 2 : 1
//                );
//                const score = minimax(
//                    newBoard,
//                    depth - 1,
//                    true,
//                    player,
//                    originalPlayer,
//                    alpha,
//                    beta
//                );

//                minScore = Math.min(minScore, score);
//                beta = Math.min(beta, score);
//                if (beta <= alpha) {
//                    break;
//                }
//            }
//            return minScore;
//        }
//    }

//    // Helper function to evaluate the board.board

//    function evaluateBoard(board, player) {
//        const opponent = player === 1 ? 2 : 1;
//        let score = 0;

//        // Check rows
//        for (let rowIdx = 0; rowIdx <= NUM_ROW - WINNER; rowIdx++) {
//            for (let colIdx = 0; colIdx < NUM_COL; colIdx++) {
//                const window = [];
//                for (let i = 0; i < WINNER; i++) {
//                    window.push(board[colIdx][rowIdx + i]);
//                }
//                score += evaluateWindow(window, player, opponent);
//            }
//        }

//        // Check columns
//        for (let colIdx = 0; colIdx <= NUM_COL - WINNER; colIdx++) {
//            for (let rowIdx = 0; rowIdx < NUM_ROW; rowIdx++) {
//                const window = [];
//                for (let i = 0; i < WINNER; i++) {
//                    window.push(board[colIdx + i][rowIdx]);
//                }
//                score += evaluateWindow(window, player, opponent);
//            }
//        }

//        // Check diagonals (ascending)
//        for (let colIdx = 0; colIdx <= NUM_COL - WINNER; colIdx++) {
//            for (let rowIdx = 0; rowIdx <= NUM_ROW - WINNER; rowIdx++) {
//                const window = [];
//                for (let i = 0; i < WINNER; i++) {
//                    window.push(board[colIdx + i][rowIdx + i]);
//                }
//                score += evaluateWindow(window, player, opponent);
//            }
//        }

//        // Check diagonals (descending)
//        for (let colIdx = 0; colIdx <= NUM_COL - WINNER; colIdx++) {
//            for (let rowIdx = WINNER - 1; rowIdx < NUM_ROW; rowIdx++) {
//                const window = [];
//                for (let i = 0; i < WINNER; i++) {
//                    window.push(board[colIdx + i][rowIdx - i]);
//                }
//                score += evaluateWindow(window, player, opponent);
//            }
//        }
//        return score;
//    }

//    // Helper function to evaluate a window (sequence of adjacent cells)
//    function evaluateWindow(window, player, opponent) {
//        let playerCount = 0;
//        let opponentCount = 0;

//        for (let cell of window) {
//            if (cell === player) {
//                playerCount++;
//            } else if (cell === opponent) {
//                opponentCount++;
//            }
//        }
//        if (playerCount === WINNER) {
//            return 100; // Player has WINNER in a row, maximum score
//        } else if (opponentCount === WINNER) {
//            return -100; // Opponent has WINNER in a row, minimum score
//        } else if (playerCount === WINNER - 1 && opponentCount === 0) {
//            return 10; // Player has WINNER - 1 in a row
//        } else if (playerCount === WINNER - 2 && opponentCount === 0) {
//            return 5; // Player has WINNER - 2 in a row
//        } else if (opponentCount === WINNER - 1 && playerCount === 0) {
//            return -8; // Opponent has WINNER - 1 in a row
//        } else if (opponentCount === WINNER - 2 && playerCount === 0) {
//            return -4; // Opponent has WINNER - 2 in a row
//        } else {
//            return 0; // Neutral position
//        }
//    }

//      const onClickCol = () => {
//          dispatchBoard({ type: "move", colIdx });

//          // Make AI move after player's move
//          setTimeout(() => {
//              const updatedBoard = makeAIMove(board, currentPlayer);

//              dispatchBoard({
//                  type: "move",
//                  colIdx: updatedBoard,
//              });
//          }, 1000);
//      };




//      //* This is the original working code for connect four



//      const NUM_ROW = 6;
//      const NUM_COL = 7;
//      const WINNER = 4;

//      export default function ConnectFour({
//          player1,
//          player2,
//          player1Border,
//          player2Border,
//          boardBorder,
//      }) {
//          const [{ board, winner, isGameOver, currentPlayer }, dispatchBoard] =
//              useReducer(reducer, genEmptyState());
//          return (
//              <>
//                  {currentPlayer === 1 && isGameOver === false && (
//                      <Typography
//                          variant="h3"
//                          style={{
//                              color: `${player1}`,
//                              textAlign: "center",
//                              padding: "1rem",
//                          }}
//                      >
//                          Player 1's Turn
//                      </Typography>
//                  )}
//                  {currentPlayer === 2 && isGameOver === false && (
//                      <Typography
//                          variant="h3"
//                          style={{
//                              color: `${player2}`,
//                              textAlign: "center",
//                              padding: "1rem",
//                          }}
//                      >
//                          Player 2's Turn
//                      </Typography>
//                  )}
//                  {winner === 1 && (
//                      <Typography
//                          variant="h3"
//                          style={{
//                              color: `${player1}`,
//                              textAlign: "center",
//                              padding: "1rem",
//                          }}
//                      >
//                          Player {winner} Wins
//                      </Typography>
//                  )}
//                  {winner === 2 && (
//                      <Typography
//                          variant="h3"
//                          style={{
//                              color: `${player2}`,
//                              textAlign: "center",
//                              padding: "1rem",
//                          }}
//                      >
//                          Player {winner} Wins
//                      </Typography>
//                  )}
//                  {isGameOver === true && winner == null && (
//                      <Typography
//                          variant="h3"
//                          style={{
//                              color: `${boardBorder}`,
//                              textAlign: "center",
//                              padding: "1rem",
//                          }}
//                      >
//                          Game Over!
//                      </Typography>
//                  )}
//                  <ConnectFourBoard>
//                      {board.map((colEntries, colIdx) => {
//                          const onClickCol = () => {
//                              dispatchBoard({ type: "move", colIdx });

//                              // Make AI move after player's move
//                              // setTimeout(() => {
//                              //     // const updatedBoard = makeAIMove(
//                              //     //     board,
//                              //     //     currentPlayer
//                              //     // );

//                              // //    console.log(updatedBoard);
//                              //     dispatchBoard({
//                              //         type: "move",
//                              //         colIdx: 0,
//                              //     });
//                              // }, 1000);
//                          };
//                          return (
//                              <Column
//                                  player1={player1}
//                                  player2={player2}
//                                  player1Border={player1Border}
//                                  player2Border={player2Border}
//                                  key={colIdx}
//                                  entries={colEntries}
//                                  onClick={onClickCol}
//                                  boardBorder={boardBorder}
//                              />
//                          );
//                      })}
//                  </ConnectFourBoard>
//                  <Switch
//                      onChange={() => {
//                          dispatchBoard({ type: "restart" });
//                      }}
//                      inputProps={{ "aria-label": "controlled" }}
//                  />

//                  <Typography sx={{ color: "white" }}>Clear Board</Typography>
//              </>
//          );
//      }
//      function Column({
//          entries,
//          onClick,
//          player1,
//          player2,
//          player1Border,
//          player2Border,
//          boardBorder,
//      }) {
//          return (
//              <ConnectFourColumn onClick={onClick}>
//                  {entries.map((entry, rowIdx) => {
//                      return (
//                          <ConnectFourTile
//                              key={rowIdx}
//                              style={{ border: `4px solid ${boardBorder}` }}
//                              className="tile"
//                          >
//                              {entry == null && <div />}
//                              {entry === 1 && (
//                                  <BoardToken
//                                      style={{
//                                          backgroundColor: `${player1}`,
//                                          border: `4px solid ${player1Border}`,
//                                      }}
//                                  />
//                              )}
//                              {entry === 2 && (
//                                  <BoardToken
//                                      style={{
//                                          backgroundColor: `${player2}`,
//                                          border: `4px solid ${player2Border}`,
//                                      }}
//                                  />
//                              )}
//                          </ConnectFourTile>
//                      );
//                  })}
//              </ConnectFourColumn>
//          );
//      }

//      function reducer(state, action) {
//          switch (action.type) {
//              case "restart":
//                  return genEmptyState();
//              case "move":
//                  const relevantCol = state.board[action.colIdx];
//                  const colIsFull = relevantCol[0] != null;
//                  if (state.isGameOver || colIsFull) return state;

//                  const { board, currentPlayer } = state;

//                  const boardClone = [...board];
//                  const colClone = [...relevantCol];

//                  const rowIdx = colClone.lastIndexOf(null);
//                  colClone[rowIdx] = currentPlayer;
//                  boardClone[action.colIdx] = colClone;

//                  const didWinVertical = didWin(
//                      rowIdx,
//                      action.colIdx,
//                      1,
//                      0,
//                      boardClone,
//                      currentPlayer
//                  );
//                  const didWinHorizontal = didWin(
//                      rowIdx,
//                      action.colIdx,
//                      0,
//                      1,
//                      boardClone,
//                      currentPlayer
//                  );
//                  const didWinDiagnol =
//                      didWin(
//                          rowIdx,
//                          action.colIdx,
//                          1,
//                          1,
//                          boardClone,
//                          currentPlayer
//                      ) ||
//                      didWin(
//                          rowIdx,
//                          action.colIdx,
//                          -1,
//                          1,
//                          boardClone,
//                          currentPlayer
//                      );
//                  const winner =
//                      didWinDiagnol || didWinHorizontal || didWinVertical
//                          ? currentPlayer
//                          : null;

//                  const isBoardFull = boardClone.every((column) =>
//                      column.every((value) => value != null)
//                  );

//                  return {
//                      board: boardClone,
//                      currentPlayer: currentPlayer === 1 ? 2 : 1,
//                      winner,
//                      isGameOver: winner != null || isBoardFull,
//                  };
//              default:
//                  throw new Error("Unexpected action type");
//          }
//      }

//      function genEmptyState() {
//          return {
//              board: new Array(NUM_COL)
//                  .fill(null)
//                  .map((_) => new Array(NUM_ROW).fill(null)),
//              currentPlayer: 1,
//              winner: null,
//              isGameOver: false,
//          };
//      }

//      function didWin(
//          startingRow,
//          startingCol,
//          rowIncrement,
//          colIncrement,
//          board,
//          currentPlayer
//      ) {
//          let numInARow = 0;
//          let currRow = startingRow;
//          let currCol = startingCol;

//          while (
//              currCol < NUM_COL &&
//              currRow < NUM_ROW &&
//              board[currCol][currRow] === currentPlayer
//          ) {
//              numInARow++;
//              currRow += rowIncrement;
//              currCol += colIncrement;
//          }
//          currRow = startingRow - rowIncrement;
//          currCol = startingCol - colIncrement;
//          while (
//              currCol >= 0 &&
//              currRow >= 0 &&
//              board[currCol][currRow] === currentPlayer
//          ) {
//              numInARow++;
//              currRow -= rowIncrement;
//              currCol -= colIncrement;
//          }

//          return numInARow >= WINNER;
//      }

import React, { useState } from "react";
import styles from "./App.css";
import Board from "./components/Board/Board";

var emptyBoard = [];
for (let i = 0; i < 6; i++) {
    emptyBoard.push(new Array(7).fill(0));
}

const App = () => {
    const [level, setLevel] = useState(0); // 0 for easy, 1 for medium, 2 for hard
    const [board, setBoard] = useState(emptyBoard); // 0 for empty cell, 1 for you(black), 2 for opponent(red)
    const [yourTurn, setYourTurn] = useState(true); // true if your turn, false if opponent's
    const [winner, setWinner] = useState(0); // 0 no one/game still going, 1 you, 2 opponent, 3 tie

  const getEmptyRow = (colIndex, currBoard) => {
    for(var i = 5; i >= 0; i--){
      if(currBoard[i][colIndex] === 0){
        return i;
      }
    }
    console.log(colIndex);
    return -1;
  }

  const checkVertWin =(row, col, currBoard) => {
    if(row > 2){
      return false;
    }
    var furthestDownIndex = row + 3;
    var furthestUpIndex = row - 3;
    if(furthestDownIndex >5){
      furthestDownIndex = 5;
    }
    if(furthestUpIndex < 0){
      furthestUpIndex = 0; 
    }
    for(var i = furthestDownIndex; i >= furthestUpIndex + 3; i--){
      if(currBoard[i][col] === currBoard[i-1][col] 
        && currBoard[i-1][col] === currBoard[i-2][col]
        && currBoard[i-2][col] === currBoard[i-3][col]){
          return true;
      }
    }
    return false;
  }

  const checkHorizWin = (row, col, currBoard) => {
    var furthestRightIndex = col + 3;
    var furthestLeftIndex = col - 3;
    if(furthestRightIndex >6){
      furthestRightIndex = 6;
    }
    if(furthestLeftIndex < 0){
      furthestLeftIndex = 0; 
    }
    for(var i = furthestRightIndex; i >= furthestLeftIndex + 3; i--){
      if(currBoard[row][i] === currBoard[row][i-1] 
        && currBoard[row][i-1] === currBoard[row][i-2]
        && currBoard[row][i-2] === currBoard[row][i-3]){
          return true;
      }
    }
    return false;
  }

  const checkDiagWin = (row, col, currBoard) => {
    // for bottom right to top left
    var checkRow = row;
    var checkCol = col; 
    var count = 0;
    // Get bottom-right-most cell to check
    while(checkRow < 5 && checkCol < 6 && count < 3){
      checkRow++;
      checkCol++;
      count++;
    }
    
    // Check bottom right to top left 
    while(checkRow >= 3 && checkCol >= 3){
      if(currBoard[checkRow][checkCol] !== 0
        && currBoard[checkRow][checkCol] === currBoard[checkRow-1][checkCol-1] 
        && currBoard[checkRow-1][checkCol-1] === currBoard[checkRow-2][checkCol-2]
        && currBoard[checkRow-2][checkCol-2] === currBoard[checkRow-3][checkCol-3]){
          return true;
      }
      checkRow--;
      checkCol--;
    }

    // for bottom left to top right
    checkRow = row;
    checkCol = col; 
    count = 0;
    // Get bottom-left-most cell to check
    while(checkRow < 5 && checkCol >0 && count < 3){
      checkRow++;
      checkCol--;
      count++;
    }
    
    // Check bottom left to top right
    while(checkRow >= 3 && checkCol <= 3){
      if(currBoard[checkRow][checkCol] !== 0
        && currBoard[checkRow][checkCol] === currBoard[checkRow-1][checkCol+1] 
        && currBoard[checkRow-1][checkCol+1] === currBoard[checkRow-2][checkCol+2]
        && currBoard[checkRow-2][checkCol+2] === currBoard[checkRow-3][checkCol+3]){
          return true;
      }
      checkRow--;
      checkCol--;
    }   
    return false;
  }

 const checkBoardFull = (currBoard) => {
    var boardFull= true;
    for(var i = 0; i < 7; i++){
      if(currBoard[0][i] === 0){
        boardFull = false; 
      }
    }
    return boardFull;
  }

 const checkGameOver = (row, col, currBoard) => {
    if(checkVertWin(row, col, currBoard) 
    || checkHorizWin(row, col, currBoard) 
    || checkDiagWin(row,col, currBoard)){
      return currBoard[row][col];
    } else{
      if(row === 0 && checkBoardFull(currBoard)){
        return 3;
      } else{
        return 0; 
      }
    }
  }

  const bestPlacement = (givenBoard, depth) => {
    var currBoard = [];
    for(let i = 0; i < 6; i++ ){
      currBoard.push(givenBoard[i].slice());
    }
    const moves = possibleActions(currBoard);
    var moveValues = [];
    for(var i = 0; i < moves.length; i++){
      var row = moves[i];
      var col = i;
      if(row === -1){
        moveValues.push(-9999);
      } else{
        moveValues.push(getValue(row, col, currBoard, depth, 0, 2));
      }
    }
    var bestCol = -1;
    var bestVal = -99999;
    for(var j = 0; j < moveValues.length; j++){
      if(moveValues[j] > bestVal){
        bestCol = j;
        bestVal = moveValues[j];
      }
      if(moveValues[j] === bestVal){ // if at same value, randomly decide whether to swap it out 
        var rand = Math.floor(Math.random() * (j + 1)); 
        if(rand === j - 1){
          bestCol = j;
        }
      }
    }
    
    return bestCol;
  }

  const possibleActions = (currBoard) => { // get all possible row-col moves for given state 
    var availableMoves = []; 
    for(var i = 0; i < 7; i++){
      var openRow = getEmptyRow(i, currBoard);
      availableMoves.push(openRow);
    }
    return availableMoves;
  }

  const getValue = (row, col, givenBoard, depth, currDepth, player) => {
    var currBoard = [];
    for(let i = 0; i < 6; i++ ){
      currBoard.push(givenBoard[i].slice());
    }
    //check if someone wins this state
    currBoard[row][col] = player;
    var whoWon = checkGameOver(row, col, currBoard); 
    if(whoWon === 2){ // computer wants to win 
      return 10-depth;
    } 
    else if(whoWon === 3){ // tie is okay
      return 0;
    }
    else if(whoWon === 1){ // do not want player to win
      return -10+depth; 
    } 
    else { // game still going 
      if(currDepth >= depth){ // don't go beyond depth 
        return 0;
      }
      const moves = possibleActions(currBoard);
      var moveValues = [];
      for(var i = 0; i < moves.length; i++){
        var nextRow = moves[i];
        var nextCol = i;
        if(nextRow !== -1){
          moveValues.push(getValue(nextRow, nextCol, currBoard, depth, currDepth+1, 3-player));
        }
      }
      var bestVal = 0; 
      if(player === 2){
        bestVal = Math.min(...moveValues);
      }else{
        bestVal = Math.max(...moveValues);
      }
      return bestVal;
    }
  }
  
const cellClickHandler = (colIndex) => {
    if (winner !== 0) {
        return;
    }

    const newBoard = [];
    for (let i = 0; i < 6; i++) {
        newBoard.push(board[i].slice());
    }

    const openRow = getEmptyRow(colIndex, newBoard);
    if (openRow === -1) {
        return;
    }

    newBoard[openRow][colIndex] = 1;

    setBoard(newBoard);
    setYourTurn(!yourTurn);

    const whoWon = checkGameOver(openRow, colIndex, newBoard);
    if (whoWon !== 0) {
        setWinner(whoWon);
    } else {
        const computerCol = bestPlacement(newBoard, level * 2 + 1);
        const computerRow = getEmptyRow(computerCol, newBoard);
        newBoard[computerRow][computerCol] = 2;

        setTimeout(() => {
            setBoard(newBoard);
            setYourTurn(!yourTurn);

            const whoWon = checkGameOver(computerRow, computerCol, newBoard);
            if (whoWon !== 0) {
                setWinner(whoWon);
            }
        }, 100); // Delay to make it feel like the computer is "thinking"
    }
};

  const levelClick = (buttonNum) => {
    setLevel({level: buttonNum});
    resetClickHandler();
  }

  const resetClickHandler = () =>{
    useState({
      board: emptyBoard, 
      yourTurn: true, 
      winner: 0
    })
  }

    let result;
    if (winner !== 0) {
        if (winner === 1) {
            result = <h4>"You win!"</h4>;
        } else if (winner === 2) {
            result = <h4>"Sorry, you lost."</h4>;
        } else {
            result = <h4>"It's a tie."</h4>;
        }
    }

    return (
        <div className={styles.App}>
            <h1>Connect 4</h1>
            <button disabled={level === 0} onClick={() => levelClick(0)}>
                Easy
            </button>
            <button disabled={level === 1} onClick={() => levelClick(1)}>
                Medium
            </button>
            <button disabled={level === 2} onClick={() => levelClick(2)}>
                Hard
            </button>
            <Board board={board} cellClick={cellClickHandler} />
            {result}
            <button onClick={resetClickHandler}>Restart</button>
            <p>Built by Tessie</p>
        </div>
    );
};

export default App;
