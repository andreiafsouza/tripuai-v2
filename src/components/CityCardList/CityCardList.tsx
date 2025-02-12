import * as S from "./styles";
import { useState, ChangeEvent, useEffect } from "react";
import { CityCard } from "@/components/CityCard/CityCard";
import { CityCardDisplay } from "@/components/CityCardDisplay/CityCardDisplay";
import SelectCityButton from "@/components/SelectCityButton/SelectCityButton";
import { CardProps } from "@/@types/global";

const CityCardList = ({ cities }: { cities: CardProps[] }) => {
  const [selectedCity, setSelectedCIty] = useState(cities[0].nome);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<CardProps[]>([]);
  const [cityCards, setCityCards] = useState<CardProps[]>([]);

  const handleChangeCityCard = (name: string) => {
    const cardName: CardProps[] = cities.filter((city) => name === city.nome);
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

  useEffect(() => {
    if (cities) {
      setCityCards(cities);
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
            id={city.id}
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
              image={city.image || ""}
            />
          </SelectCityButton>
        ))}
      </S.CardsList>
    </>
  );
};

export default CityCardList;
