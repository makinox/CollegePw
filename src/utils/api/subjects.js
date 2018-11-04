import {base} from './base'

class Subjects {
    
    async getSubjects(id) {
        let str = `${base}subjects/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }
}

export default new Subjects()