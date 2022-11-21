import Head from 'next/head'
import React from 'react'
import { FeedBackPost } from '../components/FeedbackPost'
import { GlobeBackground } from '../components/GlobeBackground'
import { PostForm } from '../components/PostForm'
import { SignUpPageTitle } from '../components/SignUpPageTitle'
import { useRegisterData } from '../contexts/registerContextData'
import { useRegisterStep } from '../contexts/registerContextStep'
import { getCssText } from '../styles/stitches.config';


export default function RegisterPage() {
  const { isSubmitted } = useRegisterStep()
  const { firstName } = useRegisterData()

  return (

    <>
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        {!isSubmitted ? <title>Cadastre-se</title> : <title>Bem vindo, {firstName}</title>}
        {!isSubmitted ? <meta name="description" content="Cadastre-se em nosso site" /> : <meta name="description" content="Bem vindo ao nosso site, aproveite o nosso conteúdo!" />}
      </Head>

      {!isSubmitted ? <>
        <PostForm />
        <SignUpPageTitle />
        <GlobeBackground backgroundType="RegisterPage" /> </> : <>
        <FeedBackPost />
        <GlobeBackground backgroundType='FeedbackPage' />
      </>}
    </>

  )
}