import { Enemy } from "./Enemy";

export class Prototype {
    // Clase inicial
    constructor(proto) {
        // proto es el prototipo.
        this.proto = proto;
        return this.clone();
    }

    clone() { // Clona el prototipo que se ha enviado.
        let baseEney = new Enemy();
        baseEney.name = this.proto.name;
        baseEney.lvl = this.proto.lvl;
        baseEney.damage = this.proto.damage;

        return baseEney;
    }
}
