import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";


import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGetPlatForms";

interface Props {
  Platforms: Platform[];
}

function PlatformIconList({ Platforms }: Props) {
  const iconMap: { [Key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
        <HStack>
      {Platforms.map((Platform) => (
          <Icon key={Platform.id}  as={iconMap[Platform.slug]} color={"gray.500"} marginY={"10px"}></Icon>
      ))}
        </HStack>
    </>
  );
}

export default PlatformIconList;
