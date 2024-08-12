import stores from '../store'

class StoreUtils {
    static dispatch(store,action) {
        return stores[store][action]()
    }

    static commit(store, state, data){
        const s = stores[store]
        s[state] = data
        return s
    }

    static get(store, getter){
        const g = stores[store]
        return g[getter]
    }
} 

export default StoreUtils
