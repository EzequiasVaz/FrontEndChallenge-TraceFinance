import { useEffect, useState } from "react";
import { useRegisterData } from "../../contexts/registerContextData";
import { Divisor } from "../SignUpPageTitle/style";
import { FeedbackPostContainer, MessagesContainer, UserIcon, UserIconName, WelcomeMessage, WelcomeSubtitleMessage } from "./style";

export function FeedBackPost() {
    const { firstName, lastName, dateOfBirthday } = useRegisterData()
    const [userNameAbbreviation, setUserNameAbbreviation] = useState<string>('')
    const [userWelcomeName, setUserWelcomeName] = useState<string>('')
    const [userDateOfBirthday, setUserDateOfBirthday] = useState<string>('')


    useEffect(() => {

        const manipulatingFirstAndLastNames = (firstName: string, lastName: string) => {
            const firstNameAbbreviation = firstName.substring(0, 1)
            const lastNameAbbreviation = lastName.substring(0, 1)
            const userWelcomeFirstName = firstName.split(" ")[0]
            const userWelcomeLastName = lastName.split(" ")[0]
            setUserNameAbbreviation(firstNameAbbreviation + lastNameAbbreviation)
            setUserWelcomeName(userWelcomeFirstName + " " + userWelcomeLastName)
        }

        const manipulatingDate = (date: string) => {
            const day = date.split('-')[2]
            const monthNumber = date.split('-').map(Number)[1]
            const year = date.split('-')[0]
            const allYearMonths = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Maio',
                'Abril',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ]
            setUserDateOfBirthday(
                `${day} de ${allYearMonths.map((month, i) => {
                    if (monthNumber - 1 === i) {
                        return month
                    }
                }).join('')
                } de ${year}`
            )
        }

        manipulatingFirstAndLastNames(firstName, lastName)
        manipulatingDate(dateOfBirthday)

    }, [firstName, lastName, dateOfBirthday])

    return (
        <FeedbackPostContainer>
            <UserIcon><UserIconName>{userNameAbbreviation.toUpperCase()}</UserIconName></UserIcon>
            <MessagesContainer>
                <WelcomeMessage>Bem vindo {userWelcomeName}</WelcomeMessage>
                <Divisor />
                <WelcomeSubtitleMessage>Você nasceu no dia {userDateOfBirthday}.</WelcomeSubtitleMessage>
            </MessagesContainer>
        </FeedbackPostContainer>
    )
}