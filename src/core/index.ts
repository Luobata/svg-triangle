/**
 * @desc triangle module
 */

import svg from '@/core/svg';
import { Config, IConfig, IPoint } from '@/lib/interface';

export default class Triangle {
    public triangle: SVGSVGElement;
    private config: IConfig;

    private start: IPoint;
    private between: IPoint;
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
        let between!: IPoint;
        let b1!: IPoint;
        let b2!: IPoint;

        switch (this.config.direction) {
            case 'up':
                const margin: number = this.config.radius / Math.sqrt(2);
                between = {
                    x: this.config.width / 2,
                    y: this.config.height,
                };
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
        this.between = between;
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
        // let filterDom: SVGFilterElement = document.createElementNS(
        //     'http://www.w3.org/2000/svg',
        //     'filter',
        // );
        let filterDom!: SVGElement;
        // tslint:enable no-http-string

        pathDom.setAttribute('d', path);
        pathDom.setAttribute('fill', this.config.color);
        svgDom.setAttribute('height', `${this.between.y}px`);
        svgDom.setAttribute('width', `${this.end.x}px`);
        svgDom.setAttribute('fill', 'transparent');
        svgDom.setAttribute('version', '1.1');

        if (this.config.shadow) {
            filterDom = this.getFilter();
            svgDom.appendChild(filterDom);
            svgDom.setAttribute('filter', 'url(#filter)');
        }
        svgDom.appendChild(pathDom);

        this.triangle = svgDom;
    }

    private getFilter(): SVGElement {
        const defs: SVGElement = svg('defs');
        const filter: SVGElement = svg('filter', {
            id: 'filter',
            x: '0',
            y: '0',
            width: '200%',
            height: '200%',
        });
        const feOffset: SVGElement = svg('feOffset', {
            result: 'offOut',
            in: 'SourceAlpha',
            dx: '0',
            dy: '1',
        });
        const feColorMatric: SVGElement = svg('feColorMatrix', {
            result: 'matrixOut',
            in: 'offOut',
            type: 'matrix',
            values: '0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0',
        });
        const feGaussianBlur: SVGElement = svg('feGaussianBlur', {
            result: 'blurOUt',
            in: 'offOut',
            stdDeviation: '5',
        });
        const feBlend: SVGElement = svg('feBlend', {
            in: 'SourceGraphic',
            in2: 'blurOut',
            mode: 'normal',
        });

        filter.appendChild(feOffset);
        filter.appendChild(feColorMatric);
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feBlend);
        defs.appendChild(filter);

        return defs;
    }
}
