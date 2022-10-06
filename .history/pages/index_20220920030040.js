import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'

import Header from  "../components/Header"


export default function Home() {
  return (
    <div className=""   >
      <Head>
        <title>elly</title>
       
      </Head>

      
      <Header/>
      <Feed/>
      
    </div>
  )
}
