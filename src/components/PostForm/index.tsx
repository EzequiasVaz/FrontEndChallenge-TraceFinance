
import { useRouter } from "next/router";
import React from "react";
import { useRegisterData } from "../../contexts/registerContextData";
import { useRegisterStep } from "../../contexts/registerContextStep";
import { DateInput } from "./DateInput";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SelectInput } from "./SelectInput";
import { AlignCenterDiv, Button, CheckBox, CheckBoxInputDiv, CheckBoxLabel, Form, FormComponent, FormComponentSubtitle, FormComponentTitle } from "./style";
import { TextAreaInput } from "./TextAreaInput";
import { TextInput } from "./TextInput";


export function PostForm() {
    const Router = useRouter()
    const { setIsSubmitted } = useRegisterStep()
    const { firstName, lastName, email, dateOfBirthday, password, country, bio, receiveNotifications, setReceiveNotifications } = useRegisterData()

    async function userSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                dateOfBirthday,
                password,
                country,
                bio,
                receiveNotifications
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        res.ok && setIsSubmitted(true)
        !res.ok && Router.push('/')
    }


    return (

        <FormComponent>

            <AlignCenterDiv>
                <FormComponentTitle>Cadastre-se</FormComponentTitle>
                <FormComponentSubtitle>Para começar, insira os dados abaixo:</FormComponentSubtitle>
            </AlignCenterDiv>

            <Form method="POST" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                userSubmit(e)
            }} autoComplete="off" >

                <TextInput id={'userFirstName'} labelTitle={'Nome'} />

                <TextInput id={'userLastName'} labelTitle={'Sobrenome'} />

                <EmailInput id={'userEmail'} labelTitle={'Email'} />

                <DateInput id={'userBirthDate'} labelTitle={'Data de Nascimento'} />

                <PasswordInput id={'userPassword'} labelTitle={'Senha'} />

                <SelectInput id={'userCountry'} />

                <TextAreaInput id={'userBio'} />

                <Button type="submit">Cadastrar</Button>

                <CheckBoxInputDiv>
                    <CheckBox type="checkbox" name="notificationBox" id="notificationBox"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            !receiveNotifications ?
                                setReceiveNotifications(true) : setReceiveNotifications(false)
                        }
                        }
                    />
                    <CheckBoxLabel htmlFor="notificationBox">Desejo receber notificações</CheckBoxLabel>
                </CheckBoxInputDiv>

            </Form>

        </FormComponent>

    )
}