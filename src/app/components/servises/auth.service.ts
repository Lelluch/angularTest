import { Injectable } from "@angular/core";

export interface IStorageUser {
    loginName: string,
    password: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    private isAuth = false


    login(loginName: string, password: string) {
        this.isAuth = true
        const storageValue = JSON.stringify({ loginName, password, isAuth: true })
        localStorage.setItem('user', storageValue)
    }

    logout() {
        this.isAuth = false
        localStorage.removeItem("user")
    }

    getUser(): IStorageUser {
        if (localStorage.getItem('user')) {
            const storage = JSON.parse(`${localStorage.getItem('user')}`)
            if (storage.isAuth) {
                return {
                    loginName: storage.loginName,
                    password: storage.password
                }
            }
        }
        return {
            loginName: '',
            password: ''
        }
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth)
            }, 50)
        })
    }
}