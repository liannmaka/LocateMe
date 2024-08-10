import { useMapStore } from "./modules/map/map"
import { useAuthStore } from "./modules/auth/auth"

const stores = {
    // TODO: import store modules dynamically
    map: useMapStore(),
    auth: useAuthStore()
}

export default stores