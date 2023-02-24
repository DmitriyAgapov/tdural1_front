import { autorun, set, toJS } from 'mobx'
type jsonType = {} | undefined
export function autoSave(_this: any, name: string) {
    // @ts-ignore
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const storedJson:jsonType = localStorage.getItem(name)
        if (storedJson) {
            // if (typeof storedJson === "string") {
            // @ts-ignore
                set(_this, JSON.parse(storedJson))
            // }
        }
        autorun(() => {
            const value = toJS(_this)
            console.log(typeof window === "undefined")

            // @ts-ignore
            localStorage.setItem(name, JSON.stringify(value))
        })
    }

}