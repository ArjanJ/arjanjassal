import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from 'rebass';

import { Particles } from '../components/Particles';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arjan</title>
        <meta name="description" content="Arjan Jassal is a frontend engineer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Particles />
      </Box>
    </div>
  )
}

export default Home
