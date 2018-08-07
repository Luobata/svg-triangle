/**
 * @desc triangle module
 */

import { Config, IConfig, IPoint } from '@/lib/interface';

export default class Triangle {
    public triangle: SVGSVGElement;
    private config: IConfig;

    private start: IPoint;
    private b1: IPoint;
    private b2: IPoint;
    private end: IPoint;

    constructor(config: IConfig) {
        this.config = new Config(config);

        this.getPoint();
        this.getSVG();
    }

    private getPoint(): void {
        const start: IPoint = {
            x: 0,
            y: 0,
        };
        const end: IPoint = {
            x: this.config.width,
            y: 0,
        };
        let b1!: IPoint;
        let b2!: IPoint;

        switch (this.config.direction) {
            case 'up':
                const margin: number = this.config.radius / Math.sqrt(2);
                b1 = {
                    x: this.config.width / 2 - margin,
                    y: this.config.height - margin,
                };
                b2 = {
                    x: this.config.width / 2 + margin,
                    y: this.config.height - margin,
                };
                break;
            default:
        }

        this.start = start;
        this.b1 = b1;
        this.b2 = b2;
        this.end = end;
    }

    private getSVG(): void {
        const path: string = `M ${this.start.x} ${this.start.y} L ${
            this.b1.x
        } ${this.b1.y} A ${this.config.radius} ${this.config.radius} 0 0 0 ${
            this.b2.x
        } ${this.b2.y} L ${this.end.x} ${this.end.y}`;

        // tslint:disable no-http-string
        const pathDom: SVGPathElement = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path',
        );
        const svgDom: SVGSVGElement = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg',
        );
        // tslint:enable no-http-string

        pathDom.setAttribute('d', path);
        svgDom.setAttribute('height', `${this.b1.y}px`);
        svgDom.setAttribute('width', `${this.end.x}px`);
        svgDom.setAttribute('version', '1.1');

        svgDom.appendChild(pathDom);

        this.triangle = svgDom;
    }
}
