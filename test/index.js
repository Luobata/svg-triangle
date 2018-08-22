import Triangle from '../src/';

window.onload = () => {
    const svg = new Triangle({
        width: 80,
        height: 30,
        shadow: 1,
        radius: 2,
        color: 'yellow',
        border: 'red',
        className: 'triangle',
    });
    const svg2 = new Triangle({
        width: 200,
        height: 100,
        shadow: 5,
        radius: 20,
        color: 'yellow',
        border: 'red',
        direction: 'up',
    });
    const svg3 = new Triangle({
        width: 20,
        height: 10,
        shadow: 1,
        radius: 2,
        color: 'yellow',
        border: 'red',
        direction: 'right',
    });
    const svg4 = new Triangle({
        width: 20,
        height: 10,
        shadow: 1,
        radius: 2,
        color: 'yellow',
        border: 'red',
        direction: 'left',
    });

    const wrap = document.querySelector('.wrap');
    wrap.append(svg.triangle);
    // document.body.appendChild(svg.triangle);
    document.body.appendChild(svg2.triangle);
    document.body.appendChild(svg3.triangle);
    document.body.appendChild(svg4.triangle);
};
