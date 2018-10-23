import {base} from './base'

class User {
    async getUser(id) {
        let str = `${base}users/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }

    async actualizeUser(id, pass) {
        const form = new FormData()
        form.append("password", pass)


        let str = `${base}users/:id`
        const query = await fetch(str.replace(':id',id), {
            method: 'PUT',
            body: form
        })
        const body = await query
        return await body.json() 
    }
}

export default new User()