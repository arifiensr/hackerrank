function catAndMouse(x, y, z) {
    return (Math.abs(z - x) < Math.abs(z - y))
        ? "Cat A"
        : (Math.abs(z - x) > Math.abs(z - y))
        ? "Cat B"
        : "Mouse C"
}

let [x,y,z] = [1,2,3];

console.log(catAndMouse(x,y,z));