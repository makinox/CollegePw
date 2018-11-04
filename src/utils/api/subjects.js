import {base} from './base'

class Subjects {
    
    async getSubjects(id) {
        let str = `${base}subjects/:id`
        const query = await fetch(str.replace(':id',id))
        const body = await query
        return await body.json() 
    }

    async postSubjects(form) {
        const query = await fetch(`${base}subjects`, {
			method: 'POST',
			body: form
		})
		const body = await query
		const { data } = await body.json()
		return data
    }

    async putSubjects(form, id) {
        let str = `${base}subjects/:id`
        const query = await fetch(str.replace(':id',id), {
			method: 'PUT',
			body: form
		})
		const body = await query
		const { data } = await body.json()
		return data
    }

    async deleteSubjects(id) {
        let str = `${base}subjects/:id`
        const query = await fetch(str.replace(':id',id), {
			method: 'DELETE'
		})
		const body = await query
		const { data } = await body.json()
		return data
    }
}

export default new Subjects()