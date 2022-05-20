import './style.css';
import { Enemy, Prototype, EnemyArmour } from "./classes";

/** --------------------------------
 -- MAIN
-------------------------------- */

/** ------
 -- Creación del primer enemigo
----- */
const baseEnemyPrototype = new Enemy('Enemigo', 15, 0);
const baseEnemy          = new Prototype(baseEnemyPrototype);// Copia del enemigo base atravéz del constructor.
const baseEnemyArmour    = new EnemyArmour(baseEnemy);//        Creamos una instancia del enemigo decorado.
const baseEnemyPrototypeArmour    = new EnemyArmour(baseEnemyPrototype);

const bossEnemyFinalPrototype = new Enemy('Boss Final', 100, 15000, 999999); // Jefe de piso final
const bossFinalModed = new EnemyArmour(bossEnemyFinalPrototype, 'Dragón');

// baseEnemy.lvl = 38; // Esta linea de codigo modifica el clon

bossFinalModed.EnemyModel(bossFinalModed);
baseEnemyArmour.EnemyModel(baseEnemyArmour);
baseEnemyPrototypeArmour.EnemyModel(baseEnemyPrototypeArmour);
