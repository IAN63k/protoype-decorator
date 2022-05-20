

export class Enemy {

    constructor(name = '', lvl = 1, damage = 10, life = 100) {
        this.name = name;
        this.lvl = (lvl < 1) ? lvl = 1 : lvl;
        this.damage = (damage < 1) ? damage = 10 : damage;
        this.life = (life < 100) ? life = 100 : life;

    }

    getEnemy() {
        return `Un ${this.name} de nvl ${this.lvl} con ${this.life} pts de vida te a provocado un daño de ${this.damage}.`;
    }
}