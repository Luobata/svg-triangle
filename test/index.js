import Triangle from '../src/';

window.onload = () => {
    const svg = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 10,
        color: 'red',
    });

    document.body.appendChild(svg.triangle);
};
