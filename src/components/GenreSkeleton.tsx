import { Box, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";


function GenreSkeleton() {
  return (
    <Box >
      <HStack padding={"5px"}>
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} spacing="4" skeletonHeight="2" width="70%" />
        {/* <SkeletonCircle size="10" />
      <SkeletonText noOfLines={2}   /> */}
      </HStack>
    </Box>
  );
}

export default GenreSkeleton;
