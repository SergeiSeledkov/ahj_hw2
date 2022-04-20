import goblinImage from '../img/goblin.png';
import getRandomArbitrary from './random';

const imageElement = document.createElement('img');
let fieldCell = document.querySelectorAll('.field_cell');

function changeRandomImageCell(fieldCellArr, image) {
  const randomCell = Math.trunc(getRandomArbitrary(0, fieldCellArr.length));
  fieldCellArr[randomCell].appendChild(image);
}

imageElement.src = goblinImage;
fieldCell = [...fieldCell];
changeRandomImageCell(fieldCell, imageElement);

setInterval(changeRandomImageCell, 1000, fieldCell, imageElement);
