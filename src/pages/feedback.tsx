import Head from "next/head";
import { FeedBackPost } from "../components/FeedbackPost";
import { GlobeBackground } from "../components/GlobeBackground";
import { useRegisterStep } from "../contexts/registerContextStep";

export default function FeedbackPage() {

    const { isSubmitted } = useRegisterStep()

    return (
        <>
            <Head>
                <title>Olá, seja bem vindo!</title>
                <meta name="description" content="Seja bem vindo." />
            </Head>
            <FeedBackPost />
            <GlobeBackground backgroundType='FeedbackPage' />

        </>
    )
} 