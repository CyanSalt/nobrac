const def = target => new Proxy({target}, {
	set: (obj, key, get) => {
		if (typeof get !== 'function') return true
		Object.defineProperty(obj.target, key, {get, configurable: true})
		return false
	}
})

module.exports = def
