var something : number;
something = 2;

interface Point {
    x: number;
    y: number;
}

let p1: Point = {x: 0, y: 0};
let p2: Point = {x: 0, y: 0};

function distance(a: Point, b: Point): number {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
distance(p1,p2);


class Cow {
    private name = 'Alice';

    public makeSound() {
        console.log('Moo!');
    }
}

export default Cow ;