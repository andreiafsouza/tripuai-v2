import * as S from "./styles";
import { useState, useEffect, KeyboardEvent } from "react";
import { CityProps } from "@/@types/global";

export type BoardProps = {
  player: string;
  rival: string;
  playerDeck: CityProps[];
  rivalDeck: CityProps[];
  playerPoints: number;
  rivalPoints: number;
};

const Board = () => {
  const [selectedSpace, setSelectedSpace] = useState<number>(0);
  const columns = 3;

  const handleKeyDown = (event: KeyboardEvent) => {
    setSelectedSpace((prevSelectedSpace) => {
      let newSelectedSpace = prevSelectedSpace;

      switch (event.key) {
        case "ArrowLeft":
          if (newSelectedSpace % columns !== 0) newSelectedSpace -= 1;
          break;
        case "ArrowRight":
          if (newSelectedSpace % columns < columns - 1) newSelectedSpace += 1;
          break;
        case "ArrowUp":
          if (newSelectedSpace - columns >= 0) newSelectedSpace -= columns;
          break;
        case "ArrowDown":
          if (newSelectedSpace + columns < columns * columns)
            newSelectedSpace += columns;
          break;
        default:
          break;
      }

      return newSelectedSpace;
    });
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpace(index);
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, []);

  return (
    <S.BoardContainer>
      {Array.from({ length: 9 }).map((_, index) => (
        <S.BoardSpace
          key={index}
          selected={selectedSpace === index}
          onClick={() => handleSpaceClick(index)}
        >
          {/* card component */}
        </S.BoardSpace>
      ))}
    </S.BoardContainer>
  );
};

export default Board;
