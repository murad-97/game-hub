import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGetGenre";
import { Platform } from "./hooks/useGetPlatForms";
import SortSelector from "./components/SortSelector";
import { sortedOrder } from "./components/SortSelector";
import HeadingComponent from "./components/HeadingComponent";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: sortedOrder | null;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"
          "main"
                `,
          lg: `"nav nav"
                "aside main"
                            `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "minmax(200px, auto) 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HeadingComponent
            gameQuery={gameQuery}
           
          />
          <HStack spacing={7} paddingLeft={4} marginBottom={4}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
