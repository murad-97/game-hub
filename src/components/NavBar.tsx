import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorThemeSwitch from "./ColorThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorThemeSwitch />
    </HStack>
  );
}

export default NavBar;
