import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis Fernando</Text>
          <Text color="gray.300" fontSize="small">luis.silva9902@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Luis Fernando" src="https://github.com/luisfcodes.png" />
    </Flex>
  )
}