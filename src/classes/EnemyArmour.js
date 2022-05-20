import { addEnemy, addKnight, addBoss } from "../js/componentes";

export class EnemyArmour {

    constructor(enemy, armuor = 'Desnudo') {
        this.enemy = enemy;
        this.enemy.armuor= armuor;
    }

    EnemyModel({enemy}) {
        (enemy.lvl < 50) 
            ? (enemy.lvl < 25)  ? addEnemy(enemy) : addKnight(enemy)
        : addBoss(enemy);
        return `Un ${this.enemy.name} -${this.enemy.armuor}- de nvl ${this.enemy.lvl}, te a provocado un daño de ${this.enemy.damage}.`;
    }

}