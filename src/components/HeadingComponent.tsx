import { Heading } from "@chakra-ui/react";

import { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery;
}
function HeadingComponent({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingLeft={4} marginBottom={4}>
      {heading}
    </Heading>
  );
}

export default HeadingComponent;
