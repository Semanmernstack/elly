import React from 'react'
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

function signIn({ providers}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders(context)
    return {
      props: { providers },
    }
  }

export default signIn