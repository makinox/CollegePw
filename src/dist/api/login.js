import {base} from './base'

class Login {

    async getLogin (user, password){
        const form = new FormData()
        form.append("user", user)
        form.append("password", password)

        const query = await fetch(`${base}auth`, {
            method: 'POST',
            body: form
        })
        const body = await query
        const {data} = await body.json()
        return data
    }
}

export default new Login()