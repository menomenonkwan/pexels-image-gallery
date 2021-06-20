import Head from 'next/head';
import { useState } from 'react';
import { getCuratedPhotos } from '../lib/api';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

export default function Home({ data }) {
  const [photos, setPhotos] = useState(data);

  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box 
        overflow="hidden" 
        minH="100vh"
        bg="pink.200"
      >
        <Header setPhotos={setPhotos} />

        <Gallery photos={photos} />

        <Footer />
      </Box>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}
