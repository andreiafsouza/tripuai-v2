import { CityProps } from "@/@types/global";

export const assignGroups = (cities: CityProps[]) => {
  //definir propriedades a serem mapeadas
  const properties: (keyof CityProps)[] = ["top", "right", "left", "bottom"];
  //definir a quantidade de cartas que vão estar em cada grupo(853 cartas divididas em 10 grupos).
  const groupSize = [87, 85, 85, 85, 85, 85, 85, 85, 85, 86];

  const groupedCities: CityProps[] = cities.map((city) => ({ ...city }));

  //O valor de cada propriedade pode ir de 1 até 10, então as primeiras 87 cartas com menor valor de "top",
  //vão receber o valor 1 nessa propriedade, e assim sucessivamente.
  properties.forEach((property, index) => {
    groupedCities.sort(
      (a, b) => (a[property] as number) - (b[property] as number)
    );

    let group = 1;
    let groupCount = 0;

    for (const city of groupedCities) {
      (city[property] as number) = group;

      if (groupCount === groupSize[index]) {
        group++;
        groupCount = 0;
      } else {
        groupCount++;
      }
    }
  });

  const sortedGroupedCities = groupedCities.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  return sortedGroupedCities;
};

export function getRandomCards(cityCard: CityProps[], count: number) {
  const shuffledCities = cityCard.slice().sort(() => Math.random() - 0.5); // Shuffle the array
  const selectedCards = shuffledCities.slice(0, count);
  return selectedCards;
}

// Check if selected card is already placed on the Board
export function checkAlreadyPlacedCards(
  board: (CityProps | null)[],
  newSelectedCard: CityProps
) {
  const isCardAlreadyPlaced = board.some(
    (card) => card && card.id === newSelectedCard.id
  );

  return isCardAlreadyPlaced;
}
