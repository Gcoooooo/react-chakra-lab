import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  Spacer,
  Button,
  Input, Stack, HStack, Circle, Square, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, Center, SimpleGrid, GridItem
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" justify="center" align="center" borderRadius="md" >
      <VStack p="5" w="" bgGradient="linear(to-t, gray.200, whit.500)" shadow="md" borderWidth="1px" borderRadius="md">
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold">
          Sign in to SPBlog
        </Text>
        <Box p="2" bg="blue.500"  shadow="dark-lg" rounded="md">
          <FormControl p="10" id="userName">
            <FormLabel>UserName</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl p="10" id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Box>
        <Center p="2" bg="orange.500" >
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </Center>
        <Button
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Submit
          </Button>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Submit
          </Button>
      </VStack>
    </Flex>
    {/* <Box textAlign="center" fontSize="xl" bgGradient="linear(to-l, gray.200, pink.500)" >
        <Grid minH="70vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="10vmin" pointerEvents="none" />
            <Text bgGradient="linear(to-r, orange.200, blue.500)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
              Edit <Code fontSize="2xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}

  </ChakraProvider>
)
