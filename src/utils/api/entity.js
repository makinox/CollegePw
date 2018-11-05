import { base } from './base'

class Entity {

	async newEntity(form) {
		const query = await fetch(`${base}entities`, {
			method: 'POST',
			body: form
		})
		const body = await query
		const { data } = await body.json()
		return data
	}
}

export default new Entity()