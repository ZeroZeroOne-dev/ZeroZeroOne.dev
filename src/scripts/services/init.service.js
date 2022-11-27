import { ItemsService } from "./items.service.js";

export class InitService {
    static async init(){
        await ItemsService.init();
    }
}