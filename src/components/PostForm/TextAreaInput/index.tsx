import { useState } from 'react'
import { useRegisterData } from '../../../contexts/registerContextData'
import { InvalidInput } from '../../../utils/interfaces/invalidInput'
import { TextAreaInput } from '../../../utils/interfaces/textareaInput'
import { ErrorSpan } from '../style'
import './style'
import { TextArea, TextAreaContainer, TextAreaLabel } from './style'

export function TextAreaInput({ id }: TextAreaInput) {
    const { setBio } = useRegisterData()
    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: 'Digite uma biografia valida',
        isInvalid: false,
    })

    function InvalidSelectInput(e: React.InvalidEvent<HTMLTextAreaElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (
        <TextAreaContainer className={isInvalidInput.isInvalid ? 'invalid' : ''}>
            <TextArea id={id}
                required maxLength={200}
                onInvalid={(e: React.InvalidEvent<HTMLTextAreaElement>) => {
                    e.preventDefault()
                    InvalidSelectInput(e)
                }}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                    return setBio(e.currentTarget.value)
                }}
            />
            <TextAreaLabel>{isInvalidInput.isInvalid ? 'Bio*' : 'Bio'}</TextAreaLabel>
            {isInvalidInput.isInvalid && <ErrorSpan>{
                isInvalidInput.message
            }</ErrorSpan>}
        </TextAreaContainer>
    )
}