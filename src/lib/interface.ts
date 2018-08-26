/**
 * @desc interface collection
 */

// TODO 有没有好一点的实现方式赋默认值

export interface Ishadow {
    offsetX?: number | string;
    offsetY?: number | string;
    blur?: number | string;
    spread?: number | string;
    opacity?: number | string;
}

export class Config {
    public width: number = 10;
    public height: number = 10;
    public direction: dirEnum = dirEnum.down;
    public radius: number = 5;
    public color: string = 'black';
    public border: string;
    public shadow: Ishadow = {};
    public className: string;

    constructor(config: IConfig) {
        Object.assign(this, config);
        this.shadow = {
            offsetX: this.shadow.offsetX || 0,
            offsetY: this.shadow.offsetY || 2,
            blur: this.shadow.blur || 4,
            opacity: this.shadow.opacity || 0.2,
        };
    }
}

export enum dirEnum {
    down = 'down',
    up = 'up',
    left = 'left',
    right = 'right',
}

export interface IConfig {
    width: number;
    height: number;
    direction: dirEnum;
    radius: number;
    color: string;
    border: string;
    shadow: Ishadow;
    className: string;
}

export interface IPoint {
    x: number;
    y: number;
}
