import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGetGenre, { Genre } from "../hooks/useGetGenre";
import getCroppedImages from "../services/getCropedImages";
import GenreSkeleton from "./GenreSkeleton";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGetGenre();
  const genreSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {isLoading
          ? genreSkeletons.map((genreSkeleton) => (
              <GenreSkeleton key={genreSkeleton} />
            ))
          : data.map((genre) => (
              <ListItem key={genre.id} padding={"5px"}>
                <HStack>
                  <Image
                    boxSize={"32px"}
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImages(genre.image_background)}
                  />
                  <Button
                    fontWeight={
                      selectedGenre?.id === genre.id ? "bold" : "normal"
                    }
                    onClick={() => {
                      onSelectGenre(genre);
                    }}
                    fontSize={"lg"}
                    variant={"link"}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
}

export default GenresList;
