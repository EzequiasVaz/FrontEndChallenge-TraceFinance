import { useState } from "react"
import { useRegisterData } from "../../../contexts/registerContextData"
import { InvalidInput } from "../../../utils/interfaces/invalidInput"
import { TextInput } from "../../../utils/interfaces/textInput"
import { ErrorSpan, FormInput, FormLabel, FormLabelAndInputDiv } from "../style"

export function TextInput({ labelTitle, id }: TextInput) {
    const { setFirstName } = useRegisterData()
    const { setLastName } = useRegisterData()

    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: `Digite um ${labelTitle.toLocaleLowerCase()} valido`,
        isInvalid: false,
    })

    function invalidInput(currentTarget: React.InvalidEvent<HTMLInputElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (

        <FormLabelAndInputDiv className={isInvalidInput.isInvalid ? 'invalid' : ''}
        >
            <FormInput type="text" name={id} id={id} required
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    invalidInput(e)
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    id == "userFirstName" && setFirstName(e.currentTarget.value)
                    id == "userLastName" && setLastName(e.currentTarget.value)
                    setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                }}
            />
            <FormLabel htmlFor={id}>{isInvalidInput.isInvalid ? `${labelTitle}*` : labelTitle}</FormLabel>
            {isInvalidInput.isInvalid && <ErrorSpan>{isInvalidInput.message}</ErrorSpan>
            }
        </FormLabelAndInputDiv>

    )
}