/**
 * @desc type declare
 */

import { IConfig } from '@/lib/interface';

export = Triangle;

declare class Triangle {
    constructor(config: IConfig);

    triangle: SVGSVGElement;

    update(config?: IConfig): void;
}
