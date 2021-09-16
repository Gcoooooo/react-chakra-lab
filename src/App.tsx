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
    <Flex
      minH="100vh"
      mt="20"
      justify="center"
      align="flex-start"
      borderRadius="md">
      <VStack
        borderRadius="sm"
        p="3">
        <Box
          p="2"
          textAlign="center"
          w="320px">
          <Text
            fontSize="2xl"
            fontWeight="thin"
          >
            Sign in to SPBlog
          </Text>
        </Box>
        <Box
          p="2"
          borderWidth="1px"
          borderRadius="md" 
          w="320px" align="center">
          <FormControl
            id="userName" p="2">
            <FormLabel>UserName</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl
            id="password" p="2">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          
          <Button
            // isLoading
            // loadingText="Submitting"
            colorScheme="green"
            type="submit" 
            w="230px"
            p="2"
          >
            Login in
          </Button>
     
        </Box>
        

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
