export type IUser = {
    id: number
    displayname: string
    fullname: string
    email: string
    phone: string
    password: string
    avatar: string
    admin: boolean
    refresh_token?: string | null
    isActive: boolean
    isCVTV: boolean
}