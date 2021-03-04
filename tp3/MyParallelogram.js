import {CGFobject} from '../lib/CGF.js';

export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			3, 1, 0,	//2
			1, 1, 0,	//3
			0, 0, 0,	//0.2
			2, 0, 0,	//1.2
			3, 1, 0,	//2.2
			1, 1, 0		//3.2
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1,
			0, 0,-1
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
            0, 2, 3,
			3, 2, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}