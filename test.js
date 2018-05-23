gameArray = [[null, null, null, 0, 0, null, 0],
             [null, 0, 1, 1, 1, 1, 0],
             [1, 0, 1, 0, null, 1, 1],
            [0, 0, 0, 1, 1, 1, null],
            [1, 0, 0, 0, 0, 1, 1],
            [0, null, null, 1, null, null, null],
            [0, null, null, null, 1, null, null]
    ];
/*
function checkHorizontalWin(someArray){
    debugger;
    for(var checkRow = someArray.length-1; checkRow >= 0; checkRow--){
        for(var checkInnerRow = 0; checkInnerRow < someArray[checkRow].length; checkInnerRow++){
            if(someArray[checkRow][checkInnerRow] === someArray[checkRow][checkInnerRow + 1] && someArray[checkRow][checkInnerRow + 1] === someArray[checkRow][checkInnerRow + 2] && someArray[checkRow][checkInnerRow + 2] === someArray[checkRow][checkInnerRow + 3]){
                console.log('you win')
            }
          else{
            console.log('no')
          }
          }
        }
    }
*/

//checkHorizontalWin(gameArray);

function checkVerticalWin(someArray){
    debugger;
    for(var checkRow = someArray.length-1; checkRow >= 4; checkRow--){
        for(var checkInnerRow = 0; checkInnerRow < someArray[checkRow].length; checkInnerRow++){
            if(someArray[checkRow][checkInnerRow] === someArray[checkRow-1][checkInnerRow] && someArray[checkRow-1][checkInnerRow] === someArray[checkRow-2][checkInnerRow] && someArray[checkRow-2][checkInnerRow] === someArray[checkRow-3][checkInnerRow]){
                console.log('you win')
            }
          else{
            console.log('no')
          }
          }
        }
    }

checkVerticalWin(gameArray);