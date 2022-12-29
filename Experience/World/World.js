import * as THREE from 'three';
import Experience from '../Experience';
import Environment from './Environment';
import Room from './Room';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resouces = this.experience.resources;

    this.resouces.on('ready', () => {
      this.environment = new Environment();
      this.room = new Room();
    });
  }

  resize() {}

  update() {}
}
