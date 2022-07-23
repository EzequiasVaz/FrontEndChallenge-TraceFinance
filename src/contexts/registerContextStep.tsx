import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type RegisterContextProps = {
    children: ReactNode
}

interface RegisterContextStep {
    isSubmitted: boolean,
    setIsSubmitted: (newState: boolean) => void,
}

const initialValue = {
    isSubmitted: false,
    setIsSubmitted: () => { },
}

const RegisterContextStep = createContext<RegisterContextStep>(initialValue)


export function RegisterContextStepProvider({ children }: RegisterContextProps) {
    const [isSubmitted, setIsSubmitted] = useState(initialValue.isSubmitted)
    return (
        <RegisterContextStep.Provider value={{
            isSubmitted, setIsSubmitted,
        }}>
            {children}
        </RegisterContextStep.Provider>
    )
}

export function useRegisterStep() {
    const context = useContext(RegisterContextStep)
    if (context == undefined) {
        throw new Error('Context deve ser usado com um Provider');
    }
    return context
}