import { NinePatch } from "@koreez/phaser3-ninepatch";

export namespace Asset {

    export type Image = {
        texture: string,
        frame?: string | number,
        ninePatch?: NinePatch,
    }

}