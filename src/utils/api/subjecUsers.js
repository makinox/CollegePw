import {base} from './base'

class subjectUsers {

    async getSusers(id) {
        let str = `${base}subject_users/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }

}

export default new subjectUsers()