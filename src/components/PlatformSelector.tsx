import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGetPlatForms, { Platform } from "../hooks/useGetPlatForms";
interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = useGetPlatForms();
  console.log(data);
  

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectedPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
