# TripUAI - Jogo de Cartas das Cidades Mineiras

## 📌 Sobre o Projeto

**TripUAI** é um jogo de cartas estratégico onde as cartas representam os **853 municípios do estado de Minas Gerais**, cada uma com atributos baseados em indicadores do **IBGE**.

A aplicação foi desenvolvida utilizando:
- ⚡ **Vite** - Ferramenta de build rápida para aplicações frontend.
- ⚛️ **React** - Biblioteca para construção de interfaces de usuário.
- 🏛️ **Redux** - Gerenciamento de estado global.
- 🔷 **TypeScript** - Tipagem estática para maior segurança e escalabilidade.

---

## 🃏 As Cartas

Cada carta do jogo representa um município de Minas Gerais e possui um **score** em cada lado. Esses valores foram calculados com base nos seguintes indicadores do IBGE:

| Lado da Carta | Indicador IBGE | Descrição |
|--------------|----------------|-----------|
| **Topo** | 96386 | População - Densidade Demográfica |
| **Direita** | 60045 | Educação - Taxa de escolarização de 6 a 14 anos |
| **Esquerda** | 60030 | Meio Ambiente - Esgotamento sanitário adequado |
| **Inferior** | 47001 | Economia - PIB per capita |

- **Escala de Score**: O valor de cada lado varia entre **1 e 10**, sendo **10 representado por um ícone de estrela dourada ⭐**.
- **Símbolos Adicionais**: Algumas cartas possuem um ícone no canto superior direito representando o **bioma predominante** do município, de acordo com o **IBGE (Indicador 77861 - Biomas)**.
- **Ilustração**: No centro de cada carta há um símbolo representativo da cidade.

---

## 📊 Como os Scores São Calculados?

Cada score foi calculado com base nos valores reais dos indicadores do IBGE, distribuindo os municípios em **10 grupos**. O cálculo segue a seguinte lógica:

1. Os 853 municípios são ordenados pelo valor do indicador correspondente a cada lado da carta.
2. Esses municípios são divididos em **10 grupos**, onde os municípios com os menores valores recebem score **1**, e os com os maiores valores recebem score **10**.
3. Esse processo é repetido para cada um dos **quatro lados da carta** (população, educação, meio ambiente e economia).
4. O resultado é uma distribuição equilibrada, garantindo que as cartas tenham variações estratégicas de valores.

---

## 📜 Regras do Jogo

### 📌 Regras Básicas

1. **Cartas & Tabuleiro**: O jogo ocorre em um tabuleiro 3x3 e cada jogador recebe 5 cartas.
2. **Turnos Alternados**: Os jogadores se revezam colocando cartas no tabuleiro.
3. **Captura Simples**: Se o valor de um lado da sua carta for maior que o valor do lado adjacente da carta do oponente, você captura essa carta.
4. **Vitória**: O jogador que tiver mais cartas de seu lado quando o tabuleiro estiver cheio vence.
