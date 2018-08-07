import Triangle from '../src/';

window.onload = () => {
    const svg = new Triangle({
        width: 200,
        height: 100,
    });

    document.body.appendChild(svg.triangle);
};
