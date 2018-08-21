import Triangle from '../src/';

window.onload = () => {
    const svg = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 10,
        color: 'yellow',
        border: 'red',
    });
    const svg2 = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 10,
        color: 'yellow',
        border: 'red',
        direction: 'up',
    });
    const svg3 = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 10,
        color: 'yellow',
        border: 'red',
        direction: 'right',
    });
    const svg4 = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 10,
        color: 'yellow',
        border: 'red',
        direction: 'left',
    });

    document.body.appendChild(svg.triangle);
    document.body.appendChild(svg2.triangle);
    document.body.appendChild(svg3.triangle);
    document.body.appendChild(svg4.triangle);
};
