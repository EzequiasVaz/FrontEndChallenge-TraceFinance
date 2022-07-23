import React, { useState } from "react"
import { useRegisterData } from "../../../contexts/registerContextData"
import { InvalidInput } from "../../../utils/interfaces/invalidInput"
import { SelectInput } from "../../../utils/interfaces/selectInput"
import './style'
import { DivisorFormOptions, FormSelect, FormSelectContainer, Options, SelectOptions } from "./style"

const countryOptions: string[] = ['Brasil', 'Estados Unidos', 'Inglaterra']


export function SelectInput({ id }: SelectInput) {
    const { country, setCountry } = useRegisterData()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isInvalidInput, setIsInvalidInput] = useState<InvalidInput>({
        inputID: '',
        message: '',
        isInvalid: false,
    })

    function InvalidSelectInput(e: React.InvalidEvent<HTMLInputElement>) {
        setIsInvalidInput({ ...isInvalidInput, isInvalid: true })
    }

    return (
        <FormSelectContainer className={`${isOpen ? 'active' : ''} ${isInvalidInput.isInvalid ? 'invalid' : ''}`} onClick={() => { isOpen ? setIsOpen(false) : setIsOpen(true) }} tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => {
                if (e.key === 'Tab') {
                    isOpen === false && setIsOpen(true)
                }
            }}
        >

            <FormSelect type="text" placeholder={isInvalidInput.isInvalid ? "Selecione o seu país*" : 'Selecione o seu país'} id={id} defaultValue={country} tabIndex={-1} required
                onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    InvalidSelectInput(e)
                }} />
            <span></span>
            {
                isOpen && <Options className={isOpen ? 'active' : ''}>
                    <DivisorFormOptions />
                    {countryOptions.map(
                        (country: string, i: number) => {
                            return <SelectOptions tabIndex={0} key={i} onClick={() => {
                                setCountry(country)
                                setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                            }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        setCountry(country)
                                        setIsInvalidInput({ ...isInvalidInput, isInvalid: false })
                                        setIsOpen(false)
                                    }
                                    if (e.key === 'Tab' && i === countryOptions.length - 1) { //adicionando fechamento do select
                                        setIsOpen(false)
                                    }
                                }}
                            >
                                {country}
                            </SelectOptions>
                        }
                    )}
                </Options>
            }

        </FormSelectContainer>

    )
}