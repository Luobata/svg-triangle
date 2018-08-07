/**
 * @desc interface collection
 */

// TODO 有没有好一点的实现方式赋默认值

export class Config {
    public width: number = 10;
    public height: number = 10;
    public direction: dirEnum = dirEnum.up;
    public radius: number = 5;

    constructor(config: IConfig) {
        Object.assign(this, config);
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
}

export interface IPoint {
    x: number;
    y: number;
}
