/**
 * @desc triangle module
 */

import { Config, IConfig } from '@/lib/interface';

export default class Triangle {
    private triangle: HTMLElement;
    private config: IConfig;

    constructor(config: IConfig) {
        this.config = new Config(config);

        console.log(this.config);
    }
}
