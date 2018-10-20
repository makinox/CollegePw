import {base} from './base'

class Ratings {
    async getRatingsByUser(id) {
        let str = `${base}ratings/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }
}

export default new Ratings()