import { createContext, ReactNode, useContext, useState } from "react";

type RegisterContextProps = {
    children: ReactNode
}

interface RegisterContextData {
    firstName: string,
    setFirstName: (newState: string) => void
    lastName: string,
    setLastName: (newState: string) => void
    email: string,
    setEmail: (newState: string) => void
    password: string,
    setPassword: (newState: string) => void
    country: string,
    setCountry: (newState: string) => void
    dateOfBirthday: string,
    setDateOfBirthday: (newState: string) => void
    bio: string,
    setBio: (newState: string) => void
    receiveNotifications: boolean,
    setReceiveNotifications: (newState: boolean) => void

}

const initialValue = {
    firstName: '',
    setFirstName: () => { },
    lastName: '',
    setLastName: () => { },
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    country: '',
    setCountry: () => { },
    dateOfBirthday: '',
    setDateOfBirthday: () => { },
    bio: '',
    setBio: () => { },
    receiveNotifications: false,
    setReceiveNotifications: () => { }
}

const RegisterContextData = createContext<RegisterContextData>(initialValue)


export function RegisterContextDataProvider({ children }: RegisterContextProps) {
    const [firstName, setFirstName] = useState(initialValue.firstName)
    const [lastName, setLastName] = useState(initialValue.lastName)
    const [email, setEmail] = useState(initialValue.email)
    const [password, setPassword] = useState(initialValue.password)
    const [country, setCountry] = useState(initialValue.country)
    const [dateOfBirthday, setDateOfBirthday] = useState(initialValue.dateOfBirthday)
    const [bio, setBio] = useState(initialValue.bio)
    const [receiveNotifications, setReceiveNotifications] = useState(initialValue.receiveNotifications)


    return (
        <RegisterContextData.Provider value={{
            firstName, setFirstName,
            lastName, setLastName,
            email, setEmail,
            password, setPassword,
            country, setCountry,
            dateOfBirthday, setDateOfBirthday,
            bio, setBio,
            receiveNotifications, setReceiveNotifications
        }}>
            {children}
        </RegisterContextData.Provider>
    )
}

export function useRegisterData() {
    const context = useContext(RegisterContextData)
    if (context == undefined) {
        throw new Error('Context deve ser usado com um Provider');
    }
    return context
}