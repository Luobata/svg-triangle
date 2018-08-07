/**
 * @desc svg generator function
 */

interface IKey {
    [key: string]: string;
}
export default (tag: string, iKey: IKey = {}): SVGElement => {
    // tslint:disable no-http-string
    const dom: SVGElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        tag,
    );
    // tslint:enable no-http-string
    const keys: string[] = Object.keys(iKey);

    for (const i of keys) {
        dom.setAttribute(i, iKey[i]);
    }

    return dom;
};
