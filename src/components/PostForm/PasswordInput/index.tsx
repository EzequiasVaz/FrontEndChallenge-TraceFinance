import { Eye, EyeSlash } from "phosphor-react"
import { useState } from "react"
import { useRegisterData } from "../../../contexts/registerContextData"
import { InvalidInput } from "../../../utils/interfaces/invalidInput"
import { PasswordInput } from "../../../utils/interfaces/passwordInput"
import { ErrorSpan, FormInput, FormLabel, FormLabelAndInputDiv } from "../style"
import { ShowPassword } from "./style"

export function PasswordInput({ id, labelTitle }: PasswordInput) {
    const { password, setPassword } = useRegisterData()

    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: 'Digite uma senha valida',
        isInvalid: false,
    })

    const [showPassword, setShowPassword] = useState(false)

    function invalidInput(currentTarget: React.InvalidEvent<HTMLInputElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (
        <FormLabelAndInputDiv
            className={isInvalidInput.isInvalid ? 'invalid' : ''
            }>
            <FormInput type={showPassword ? "text" : "password"} name={id} id={id} required
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    invalidInput(e)
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.currentTarget.value)
                    setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                }} />
            <FormLabel htmlFor={id}>{isInvalidInput.isInvalid ? `${labelTitle}*` : labelTitle}</FormLabel>
            {isInvalidInput.isInvalid && <ErrorSpan>{
                isInvalidInput.message
            }</ErrorSpan>
            }

            {password.length !== 0 ?
                showPassword ? <ShowPassword onClick={() => { setShowPassword(false) }}>< EyeSlash size={30} weight="light" /></ShowPassword>
                    : <ShowPassword onClick={() => { setShowPassword(true) }}><Eye size={30} weight="light" /></ShowPassword> : undefined
            }


        </FormLabelAndInputDiv >
    )
}