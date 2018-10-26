import { base } from './base'

class User {
	async getUser(id) {
		let str = `${base}users/:id`
		const query = await fetch(str.replace(':id', id))
		const body = await query
		return await body.json()
	}

	async actualizeUser(id, bod) {
		let str = `${base}users/:id`
		const query = await fetch(str.replace(':id', id), {
			method: 'PUT',
			body: bod
		})
		const body = await query
		return await body.json()
	}
}

export default new User()