import { Badge } from '@chakra-ui/react'


interface Props{
    score:number
}
function GameCardBadge({score}:Props) {
    const color = score>75?"green":score>60?"yellow":""
  return (
    <Badge borderRadius={"5px"} paddingX={2} colorScheme={color}>{score}</Badge>
  )
}

export default GameCardBadge