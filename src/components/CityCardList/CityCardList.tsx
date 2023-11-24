import * as S from "./styles";
import { useState, ChangeEvent, useEffect } from "react";
import { CityCard } from "@/components/CityCard/CityCard";
import { CityCardDisplay } from "@/components/CityCardDisplay/CityCardDisplay";
import SelectCityButton from "@/components/SelectCityButton/SelectCityButton";
import { CityProps } from "@/@types/global";

const CityCardList = ({ cities }: { cities: CityProps[] }) => {
  const [selectedCity, setSelectedCIty] = useState(cities[0].nome);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<CityProps[]>([]);
  const [cityCards, setCityCards] = useState<CityProps[]>([]);

  const handleChangeCityCard = (name: string) => {
    const cardName: CityProps[] = cities.filter((city) => name === city.nome);
    const selectedName = cardName[0].nome;
    setSelectedCIty(selectedName);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    const filteredCities = cityCards.filter(
      (city) =>
        city.nome.toLowerCase().includes(inputValue.toLowerCase()) &&
        /^[a-zA-Z]+$/.test(inputValue) // Check if input contains only letters
    );

    setSuggestions(filteredCities);
  };

  const assignGroups = (cities: CityProps[]) => {
    const properties: (keyof CityProps)[] = ["top", "right", "left", "bottom"];
    const groupSize = [87, 85, 85, 85, 85, 85, 85, 85, 85, 86];

    const groupedCities: CityProps[] = cities.map((city) => ({ ...city }));

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

  useEffect(() => {
    if (cities) {
      const cityCardList: CityProps[] = assignGroups(cities);
      setCityCards(cityCardList);
    }
  }, []);

  return (
    <>
      <S.DisplayCardSection>
        <S.SearchContainer>
          <S.SearchInput
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleInputChange}
          />

          {suggestions.length > 0 && (
            <S.SuggestionContainer>
              <S.SuggestionList>
                {suggestions.map((city) => (
                  <S.SuggestionItem
                    key={city.id}
                    onClick={() => handleChangeCityCard(city.nome)}
                  >
                    {city.nome}
                  </S.SuggestionItem>
                ))}
              </S.SuggestionList>
            </S.SuggestionContainer>
          )}
        </S.SearchContainer>
        <S.CardSelected>
          <CityCardDisplay title={selectedCity} />
        </S.CardSelected>
      </S.DisplayCardSection>
      <S.CardsList>
        {cityCards.map((city) => (
          <SelectCityButton
            key={city.id}
            title={city.nome}
            selectCity={handleChangeCityCard}
          >
            <CityCard
              nome={city.nome}
              id={city.id}
              top={city.top}
              right={city.right}
              left={city.left}
              bottom={city.bottom}
              bioma={city.bioma}
            />
          </SelectCityButton>
        ))}
      </S.CardsList>
    </>
  );
};

export default CityCardList;
