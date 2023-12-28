import { game } from "../hooks/useGetGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GameCardBadge from "./GameCardBadge";
import getCroppedImages from "../services/getCropedImages";
import Emoji from "./Emoji";
interface Props {
  game: game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            Platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCardBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
