import { Box, Grid, Text, Container, Heading } from '@chakra-ui/react';

const PokemonList = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading textAlign="center" mb={8}>Pokemon Collection</Heading>
      <Text fontSize="xl" textAlign="center">
        Welcome to Pokemon Collection!
      </Text>
    </Container>
  );
};

export default PokemonList;