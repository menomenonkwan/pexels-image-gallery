import Image from 'next/image';
import Link from 'next/link';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export default function Gallery({ photos }) {
  return (   
    <Wrap px="1rem" spacing={4} justify="center">
      { photos.map((pic) => (
        <WrapItem
          key={pic.id}
          boxShadow="base"
          rounded="20px"
          overflow="hidden"
          bg="white"
          lineHeight="0"
          _hover={{ boxShadow: "dark-lg" }}
          transition="all 0.3s ease"
        >
          <Link href={`/photos/${pic.id}`}>
            <motion.div inital="hidden" visible="animate"
              variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .4
                  }
                },
              }}
              whileHover={{
                cursor: 'pointer',
                scale: 1.2,
                transition: { ease: "easeOut", duration: .75, type: 'spring' },
              }}
            >
              <Image 
                src={pic.src.portrait} 
                width={300} 
                height={450}
                alt={pic.url} 
              />
            </motion.div>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  )
}
