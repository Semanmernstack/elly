import React from 'react'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from '../../components/Header'

function signIn({ providers}) {
  return (
    <>
      <Header/>
      <div className='flex items-center  justify-center  mt-40 border '   >
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className=' bg-blue-600 p-2 text-white rounded-full'    onClick={() => SignIntoProvider(provider.id, {callbackUrl: "/" })}>
          Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }

export default signIn