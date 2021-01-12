import React, { useEffect, useState } from "react";

// import all the components we are going to use
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import boardInitialData from "../data/board-init";
import _Button from "../components/button";
import HorizantalLable from "../components/horizantal_lable";
import VarticalLable from "../components/vartical_lable";
import Lable from "../components/lable";
import { randomMove } from "../utils/Constants";
import { randomNumberGenerator } from "../utils/utility";

const Chessboard = () => {
  let num;
  const [dataSource, setDataSource] = useState([]);
  const [selectedSrcBlock, setSelectedSrcBlock] = useState({ id: -1 });
  const [randomSrcBlock, setRandomSrcBlock] = useState({ id: -1 });
  const [isRandomClick, setIsRandomClick] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [reset, setReset] = useState(0);
  const [randomPos, setRandomPos] = useState(0);
  const [isInitialized, setIsInitialized] = useState([false, false]);

  useEffect(() => {
    console.log("useEffect called");
    console.log(boardInitialData);
    setDataSource(boardInitialData);
  }, [reset]);

  useEffect(() => {
    console.log("random source block useEffect called");
    console.log("randomSrcBlock >>> ", randomSrcBlock);
    console.log("randomPos >>> ", randomPos);
    if (randomSrcBlock.id != -1) {
      let item = dataSource[randomMove[randomPos].dest];
      console.log(" handleRandomClick dest item", item);
      if (!item.isOccupied) {
        console.log("Dest Item :", item);
        console.log("validateMove");
        validateMove(item);
      }
    }
  }, [randomSrcBlock]);

  function onBlockSelected(item) {
    setIsRandomClick(false);
    console.log("setRandomClick", isRandomClick);
    if (selectedSrcBlock.id != -1 && !item.isOccupied) {
      console.log("Dest Item :", item);
      console.log("validateMove");
      validateMove(item);
    } else {
      console.log("item:", item);
      setSelectedSrcBlock((prevItem) => {
        let x = {
          ...prevItem,
          id: item.id,
          src: item.src,
          color: item.color,
          isOccupied: item.isOccupied,
          player: item.player,
          type: item.type,
        };
        return x;
      });
      console.log(
        "Selected setSelectedSrcBlock ---->   :",
        setSelectedSrcBlock
      );
    }
  }

  function movePiece(src, dest, player, type, isDestEnemyOccupied) {
    console.log(
      "src, dest, player,type, isDestEnemyOccupied",
      src,
      dest,
      player,
      type,
      isDestEnemyOccupied
    );
    console.log("playerTurn != player", playerTurn, player);
    console.log(isInitialized);
    if (playerTurn == player) {
      if (player === 1) {
        if (type === "knight") {
          if (
            src - 17 === dest ||
            src - 10 === dest ||
            src + 6 === dest ||
            src + 15 === dest ||
            src - 15 === dest ||
            src - 6 === dest ||
            src + 10 === dest ||
            src + 17 === dest
          ) {
            setIsInitialized((prevState) => {
              const newArray = [...prevState];
              newArray[1] = true;
              return newArray;
            });
            console.log(isInitialized);
            setPlayerTurn(2);
            console.log(true);
            return true;
          }
        } else {
          console.log("dest === src - 16", dest === src - 16);
          console.log("dest === src - 8", dest === src - 8);
          if (
            (dest === src - 8 && !isDestEnemyOccupied) ||
            (dest === src - 16 && !isDestEnemyOccupied && !isInitialized[0])
          ) {
            console.log(true);
            setIsInitialized((prevState) => {
              const newArray = [...prevState];
              newArray[0] = true;
              return newArray;
            });
            console.log(isInitialized);
            setPlayerTurn(2);
            return true;
          }
        }
        // else if (
        //   isDestEnemyOccupied &&
        //   isSameDiagonal(src, dest) &&
        //   (dest === src + 9 || dest === src + 7)
        // ) {
        //   return true;
        // }
      } else if (player === 2) {
        if (type === "knight") {
          if (
            src - 17 === dest ||
            src - 10 === dest ||
            src + 6 === dest ||
            src + 15 === dest ||
            src - 15 === dest ||
            src - 6 === dest ||
            src + 10 === dest ||
            src + 17 === dest
          ) {
            setIsInitialized((prevState) => {
              const newArray = [...prevState];
              newArray[1] = true;
              return newArray;
            });
            console.log(isInitialized);
            setPlayerTurn(1);
            console.log(true);
            return true;
          }
        } else {
          console.log(dest === src + 16);
          console.log(dest === src + 8);
          if (
            (dest === src + 8 && !isDestEnemyOccupied) ||
            (dest === src + 16 && !isDestEnemyOccupied && !isInitialized[1])
          ) {
            setIsInitialized((prevState) => {
              const newArray = [...prevState];
              newArray[1] = true;
              return newArray;
            });
            console.log(isInitialized);
            setPlayerTurn(1);
            console.log(true);
            return true;
          }
        }
        // else if (
        //   isDestEnemyOccupied &&
        //   isSameDiagonal(src, dest) &&
        //   (dest === src - 9 || dest === src - 7)
        // ) {
        //   return true;
        // }
      }
    }

    return false;
  }

  function setNewObjectDate(destBlock, srcObj) {
    let newArr = [...dataSource]; // copying the old datas array

    newArr[destBlock.id].type = srcObj.type;
    newArr[destBlock.id].isOccupied = true;
    newArr[destBlock.id].player = srcObj.player;
    newArr[destBlock.id].src = srcObj.src;
    newArr[srcObj.id].type = "";
    newArr[srcObj.id].isOccupied = false;
    newArr[srcObj.id].player = -1;
    newArr[srcObj.id].src = "";
    console.log("new Block >>> ", newArr[srcObj.id]);
    console.log("destBlock", newArr[destBlock.id]);
    setIsRandomClick(false);
    setRandomPos(0);
    console.log("setRandomClick", isRandomClick);
  }

  function validateMove(destBlock) {
    const dataObj = isRandomClick
      ? { ...randomSrcBlock }
      : { ...selectedSrcBlock };
    switch (dataObj.type) {
      case "pawn":
        console.log("!destBlock.isOccupied", !destBlock.isOccupied);
        if (!destBlock.isOccupied) {
          let isPossible = movePiece(
            dataObj.id,
            destBlock.id,
            dataObj.player,
            dataObj.type,
            false
          );
          if (isPossible) {
            setNewObjectDate(destBlock, dataObj);

            // setDataSource(newArr);
          } else {
            console.log("isPossible", isPossible);
          }
        }

        setSelectedSrcBlock({ id: -1 });
        return;
      case "knight":
        if (!destBlock.isOccupied) {
          let isPossible = movePiece(
            dataObj.id,
            destBlock.id,
            dataObj.player,
            dataObj.type,
            false
          );
          if (isPossible) {
            setNewObjectDate(destBlock, dataObj);
            // setDataSource(newArr);
          }
        }

        setSelectedSrcBlock({ id: -1 });
        return;
      //   return isMovePosible();
      // case 'king':
      //   return isMovePosible();
      // case 'queen':
      //   return isMovePosible();
      // case 'knight':
      //   return isMovePosible();
      // case 'bishop':
      //   return isMovePosible();
      // case 'rook':
      //   return isMovePosible();
    }
  }

  handleRandomClick = () => {
    setIsRandomClick(true);
    console.log("setRandomClick", isRandomClick);
    num = randomNumberGenerator(0, 4);
    setRandomPos(num);
    setRandomSrcBlock(dataSource[randomMove[num].src]);
  };

  handleResetClick = () => {
    setDataSource([]);
    setSelectedSrcBlock({ id: -1 });
    setPlayerTurn(1);
    setIsInitialized([false, false]);
    setReset((count) => count + 1);
    console.log("handleResetClick");
  };

  return (
    <View style={{ flexDirection: "column", backgroundColor: "black" }}>
      <Lable
        lable={playerTurn == 1 ? "PLAYER 1 ( Black )" : "PLAYER 2 ( White )"}
      ></Lable>
      <HorizantalLable></HorizantalLable>
      <View style={{ flexDirection: "row" }}>
        <VarticalLable></VarticalLable>
        <View
          style={{
            flex: 1,
            backgroundColor: "green",
            padding: 3,
          }}
        >
          <FlatList
            data={dataSource}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => onBlockSelected(item)}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    margin: 1,
                    width: 40,
                    height: 40,
                    backgroundColor: item.color,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "balck",
                    borderWidth: 1,
                  }}
                >
                  <Image style={styles.imageThumbnail} source={item.src} />
                </View>
              </TouchableWithoutFeedback>
            )}
            //Setting the number of column
            numColumns={8}
            keyExtractor={(item, index) => index}
          />
        </View>

        <VarticalLable></VarticalLable>
      </View>

      <HorizantalLable></HorizantalLable>

      <View style={styles.btn_container}>
        <_Button onPress={handleRandomClick} title={"Random"}></_Button>
        <_Button onPress={handleResetClick} title={"Reset"}></_Button>
      </View>
    </View>
  );
};
export default Chessboard;

const styles = StyleSheet.create({
  btn_container: {
    paddingTop: 30,
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    height: 25,
    width: 25,
  },
});
