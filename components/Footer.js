import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex my="3rem" justify="center" align="center" direction="column">
      <a target="_blank" href="https://www.pexels.com">
        <Image
          src="https://images.pexels.com/lib/api/pexels.png"
          height={50}
          width={125}
        />
      </a>
    </Flex>
  )
}
