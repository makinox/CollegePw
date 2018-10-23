import {base} from './base'

class Note {
    async getNotesByUser(id) {
        let str = `${base}notes/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }
}

export default new Note()