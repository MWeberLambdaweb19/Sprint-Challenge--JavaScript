// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
    constructor(options){
        this.length = options.length;
        this.width = options.width;
        this.height = options.height;
    };
    volume() {
        return this.length * this.height * this.width;
    };
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
};

const cuboidclass = new CuboidMakerClass ({
    length: 4,
    width: 5,
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidclass.volume()); // 100
console.log(cuboidclass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(cubeOptions){
    super(cubeOptions)
    this.edgeLength = cubeOptions.edgeLength;
    };
    cubeVolume(){
        return Math.pow(this.edgeLength, 3)
    }
    cubeSurfaceArea(){
        return 6 * this.edgeLength;
    }
};

const cube = new CubeMaker ({
    length: 4,
    width: 5,
    height: 5,
    edgeLength: 5,
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());