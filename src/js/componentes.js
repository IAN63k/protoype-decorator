
const divEnemy = document.querySelector('.enemys-view');

export const addEnemy = (enemy) => {
  const htmlGif = `
    <div>
        <img src="https://i.pinimg.com/originals/2a/5a/5e/2a5a5e43117e61814bf3c0074196b5cb.gif" alt="">
        <figcaption>
          ${enemy.lvl}  
        </figcaption>
        <figcaption>
         ${enemy.life}  
        </figcaption>
        <figcaption>
         ${enemy.damage}  
        </figcaption>
    </div>
    `;
  const div = document.createElement('div');
  div.innerHTML = htmlGif;

  divEnemy.append(div.firstElementChild);

  return div.firstElementChild;
}

export const addBoss = (enemy) => {
  const htmlGifBoss = `
  <div>
      <img src="https://orig14.deviantart.net/67d6/f/2016/057/7/8/goaliath___attack_by_porforever-d9t68uk.gif" alt="">
      <figcaption>
        ${enemy.lvl}  
      </figcaption>
      <figcaption>
      ${enemy.life}  
    </figcaption>
    <figcaption>
         ${enemy.damage}  
        </figcaption>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = htmlGifBoss;

  divEnemy.append(div.firstElementChild);

  return div.firstElementChild;
}
export const addKnight = (enemy) => {
  const htmlGif = `
  <div>
      <img src="https://i.pinimg.com/originals/89/3a/8a/893a8a600dbd6bf31a3242c896c6d3ff.gif" alt="">
      <figcaption>
        ${enemy.lvl}  
      </figcaption>
      <figcaption>
      ${enemy.life}  
    </figcaption>
    <figcaption>
         ${enemy.damage}  
        </figcaption>
  </div>
  `;
  const div = document.createElement('div');
  div.innerHTML = htmlGif;

  divEnemy.append(div.firstElementChild);

  return div.firstElementChild;
}