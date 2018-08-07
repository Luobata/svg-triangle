/**
 * @desc interface collection
 */

export class Config {
    public width: number = 10;
    public height: number = 10;

    constructor(config: IConfig) {
        Object.assign(this, config);
    }
}

export interface IConfig {
    width: number;
    height: number;
}
