/* -------------- BACK-END -------------- */
import bahia from './../img/bahiaestio.jpg';  
import pantano from './../img/pantanosuenos.jpg';   
import mar from './../img/maraustral.jpg';   
import vmarineris from './../img/vmarineris.jpg';   
import cordillera from './../img/cordilleratartaro.jpg';   
import tharsis from './../img/tharsis.jpg';   
import stgeminis from './../img/stgeminis.jpg';   
import staurora from './../img/staurora.png';   
import stpioneerr from './../img/stpioneerr.png';   



const itemsDB = [
  {
      id:100,
      title: 'Bahía del Estío',
      category: 'luna',
      stock: 15,
      price: 3400,
      detail: '25 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: bahia
  },
  {
      id:200,
      title: 'Pantano de Sueño',
      category: 'luna',
      stock: 3,
      price: 3800,
      detail: '25 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: pantano
  },    
  {
      id:300,
      title: 'Mar Austral',
      category: 'luna',
      stock: 102,
      price: 2985,
      detail: '25 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: mar
  },    
  {
      id:400,
      title: 'Valle Marineris',
      category: 'marte',
      stock: 21,
      price: 7100,
      detail: '2 años | Estadía: 4 meses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: vmarineris
  },
  {
      id:500,
      title: 'Cordillera de Tártaro',
      category: 'marte',
      stock: 68,
      price: 7900,
      detail: '2 años | Estadía: 4 meses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: cordillera
  },
  {
      id:600,
      title: 'Tharsis',
      category: 'marte',
      stock: 0,
      price: 7100,
      detail: '2 años | Estadía: 4 meses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: tharsis
  },
  {
      id:700,
      title: 'Estación Géminis I',
      category: 'espacio',
      stock: 12,
      price: 1900,
      detail: '15 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: stgeminis
  },
  {
      id:800,
      title: 'Estación Aurora',
      category: 'espacio',
      stock: 2,
      price: 2200,
      detail: '15 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: staurora
  },
  {
      id:900,
      title: 'Estación Pioneer',
      category: 'espacio',
      stock: 105,
      price: 2000,
      detail: '15 días | Estadía: 15 días',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sodales velit. Fusce convallis tortor quis rutrum cursus. Quisque eu odio laoreet quam feugiat varius et at enim. Sed eget mi convallis augue efficitur fermentum ac et quam. Ut sodales tincidunt augue id pretium. Donec suscipit posuere purus, et laoreet dolor auctor in. Cras molestie lacus nec lobortis suscipit.',
      thumbnail: stpioneerr
  },
]

export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDB);
    }, 500);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemRequested = itemsDB.find((item) => item.id === Number(idParams));

      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no existe."));
      }
    }, 500);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let itemsRequested = itemsDB.filter(
        (item) => item.category === categoryid
      );
      resolve(itemsRequested);
    }, 500);
  });
}
