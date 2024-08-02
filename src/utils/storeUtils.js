import stores from '../store'

class StoreUtils {
    static dispatch() {
        return stores
    }

    static commit(store, state, data){
        const s = this.dispatch()[store]
        s[state] = data
        return s
    }
} 

export default StoreUtils
