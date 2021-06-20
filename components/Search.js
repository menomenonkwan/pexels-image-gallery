import { getQueryPhotos } from '../lib/api';
import { 
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  useToast
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Search({ setPhotos }) {
  const [query, setQuery] = useState('');
  const toast = useToast();  

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if(query == '') {
      toast({
        title: "Error.",
        description: "Empty Search",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      const res = await getQueryPhotos(query);
      await setPhotos(res);
      await setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input 
          placeholder="Search for Apple" 
          variant="ghost" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <InputRightElement 
          children={
            <IconButton 
              aria-label="Search"
              icon={<SearchIcon />}
              bg="pink.400"
              color="white"
              rounded="0.375rem"
              onClick={handleSubmit}
            />
          }
        />
      </InputGroup>
    </form>
  )
}
