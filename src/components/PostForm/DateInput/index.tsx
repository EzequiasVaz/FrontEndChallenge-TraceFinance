import { useState } from "react"
import { useRegisterData } from "../../../contexts/registerContextData"
import { DateInput } from "../../../utils/interfaces/dateInput"
import { InvalidInput } from "../../../utils/interfaces/invalidInput"
import { ErrorSpan, FormInput, FormLabel, FormLabelAndInputDiv } from "../style"

export function DateInput({ id, labelTitle }: DateInput) {

    const { setDateOfBirthday } = useRegisterData()
    const [hasContent, setHasContent] = useState('')

    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: 'Digite uma data valida',
        isInvalid: false,
    })

    function invalidInput(currentTarget: React.InvalidEvent<HTMLInputElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (
        <FormLabelAndInputDiv
            className={isInvalidInput.isInvalid ? 'invalid' : ''
            }>
            <FormInput className={hasContent.length == 10 ? 'has-content' : ''} type="date" name={id} id={id} min={'1922-06-24'} max={'2022-06-24'} required
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    invalidInput(e)
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setDateOfBirthday(e.currentTarget.value)
                    setHasContent(e.currentTarget.value)
                    setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                }}
            />
            <FormLabel className={
                hasContent.length == 10 ? 'has-content' : ''
            } htmlFor={id}>{isInvalidInput.isInvalid ? `${labelTitle}*` : labelTitle}</FormLabel>
            {isInvalidInput.isInvalid && <ErrorSpan >{isInvalidInput.message}</ErrorSpan>
            }
        </FormLabelAndInputDiv>

    )
}