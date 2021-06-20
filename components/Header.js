import Search from './Search';
import { 
  Container, 
  Text, 
} from '@chakra-ui/react';

export default function Header({ setPhotos }) {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="0 5rem"
      minW="100vw"
    >
      <Text
        color="pink.800"
        mb="1rem"
        paddingTop="1rem"
        textAlign="center"
        textDecoration="underline"
        fontFamily="Benne, sans-serif"
        fontSize={["4x1", "4xl", "5xl", "5xl"]}
      >
        Pexels Image Gallery
      </Text>
      <Search setPhotos={setPhotos} />
    </Container>
  )
}
