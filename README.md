# svg-triangle

The svg-triangle is a lib which can provide a triangle icon with svg.And it support **radius/border/shadow**.

## Installation

```js
npm install --save svg-triangle
```

## Usage

```js
import Triangle from 'svg-triangle';

const svg = new Triangle({
    width: 80,
    height: 30,
    radius: 2,
    color: 'yellow',
    border: 'red',
    className: 'triangle',
    shadow: {
        opacity: 0.2,
    },
});

document.body.append(svg.triangle);
```

## Demo

[demo](https://luobata.github.io/svg-triangle/test.html)

effect:

![tri](https://ws4.sinaimg.cn/large/006tNbRwly1fun5x130q6j30di06imxa.jpg)

![tri2](https://ws2.sinaimg.cn/large/006tNbRwly1fun5x191h1j30bq0ac74c.jpg)

## API

-   Triangle(class)

    -   `constructor(conifg: IConfig)`
    -   member:
        -   `triangle: SVGSVGElement`
    -   methods:

        -   `update(config?: Iconfig): void`
            update the triangle

### Interface

-   IConfig

    | key        | type                                     | default | explain                   |
    | ---------- | ---------------------------------------- | ------- | ------------------------- |
    | width?     | nubmer                                   | 10      | triagnle wrapper width.   |
    | height?    | number                                   | 10      | triangle wrapper height.  |
    | direction? | string(enums) ['down', 'up', 'left', 'right'] | down    | triangle dirction.        |
    | radius?    | number                                   | 5       | triagnle radius.          |
    | color?     | string                                   | black   | triangle backgrond color. |
    | border?    | string                                   |         | triangle border color.    |
    | className? | string                                   |         | triangle class name.      |
    | shadow     | Ishadow                                  | Ishadow | triangle shadow.          |

    -   Ishadow

        | key      | type             | default | explain             |
        | -------- | ---------------- | ------- | ------------------- |
        | offsetX? | string \| number | 0       | same as box-shadow. |
        | offsetY? | string \| number | 4       | same as box-shadow. |
        | blur?    | string \| nubmer | 4       | same as box-shadow. |
        | opacity？ | string \| number | 0.2     | same as box-shadow. |
