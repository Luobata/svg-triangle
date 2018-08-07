/**
 * @desc triangle module
 */

import { Config, IConfig, IPoint } from '@/lib/interface';

export default class Triangle {
    public triangle: SVGSVGElement;
    private config: IConfig;

    private start: IPoint;
    private between: IPoint;
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
        let between!: IPoint;

        switch (this.config.direction) {
            case 'up':
                between = {
                    x: this.config.width / 2,
                    y: this.config.height,
                };
                break;
            default:
        }

        this.start = start;
        this.between = between;
        this.end = end;
    }

    private getSVG(): void {
        const path: string = `M ${this.start.x} ${this.start.y} L ${
            this.between.x
        } ${this.between.y} L ${this.end.x} ${this.end.y}`;

        const pathDom: SVGPathElement = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path',
        );
        const svgDom: SVGSVGElement = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg',
        );

        pathDom.setAttribute('d', path);
        svgDom.setAttribute('height', `${this.between.y}px`);
        svgDom.setAttribute('width', `${this.end.x}px`);
        svgDom.setAttribute('version', '1.1');
        // svgDom.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        svgDom.appendChild(pathDom);

        this.triangle = svgDom;
    }
}
