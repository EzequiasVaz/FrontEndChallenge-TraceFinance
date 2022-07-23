import { useState } from "react"
import { useRegisterData } from "../../../contexts/registerContextData"
import { EmailInput } from "../../../utils/interfaces/emailInput"
import { InvalidInput } from "../../../utils/interfaces/invalidInput"
import { ErrorSpan, FormInput, FormLabel, FormLabelAndInputDiv } from "../style"

export function EmailInput({ id, labelTitle }: EmailInput) {

    const { setEmail } = useRegisterData()

    const [hasContent, setHasContent] = useState('')

    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: 'Digite um email valido',
        isInvalid: false,
    })

    function invalidInput(currentTarget: React.InvalidEvent<HTMLInputElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (

        <FormLabelAndInputDiv className={isInvalidInput.isInvalid ? 'invalid' : ''}>
            <FormInput type="email" name={id} id={id} required
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    invalidInput(e)
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.currentTarget.value)
                    setHasContent(e.currentTarget.value)
                    setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                }}
            /> {/*Adicionei a class(has-content) ao label, para quando tiver algo digitado, o label não ficar em cima*/}
            <FormLabel className={
                hasContent.length !== 0 ? 'has-content' : ''
            } htmlFor={id}>{isInvalidInput.isInvalid ? `${labelTitle}*` : labelTitle}</FormLabel>
            {isInvalidInput.isInvalid && <ErrorSpan>{isInvalidInput.message}</ErrorSpan>
            }
        </FormLabelAndInputDiv>
    )

}