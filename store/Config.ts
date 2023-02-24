import {action, makeAutoObservable} from "mobx";
import {autoSave} from "#/store/autosave";


class ConfigStore {
    view: boolean
    constructor() {
        // define and init observables
        this.view = false
        makeAutoObservable(this);
        autoSave(this, 'ConfigStore');
    }
    @action setView = (value) => {
        this.view = value
    }
    hydrate = (data: any) => {
        if (!data) return;
        // this.setBooks(data.books);
    };
}

export default ConfigStore