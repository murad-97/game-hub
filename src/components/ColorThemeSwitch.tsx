import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
}

export default ColorThemeSwitch;
