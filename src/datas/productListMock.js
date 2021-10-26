import pain from '../assets/pain.jpg';
import baguette_tradi from '../assets/baguette_tradi.jpg';
import chaussons_pommes from '../assets/chaussons_pommes.jpg';
import croissant from '../assets/croissant.jpg';
import eclair_chocolat from '../assets/eclair_chocolat.jpeg';
import flan_coco from '../assets/flan_coco.jpg';
import moelleux_au_chocolat from '../assets/moelleux_au_chocolat.jpg';
import pain_chocolat from '../assets/pain_chocolat.png';
import pain_raisin from '../assets/pain_raisin.jpg';
import pain_cereales from '../assets/pain_cereales.jpg';
import tartelettes_aux_fraises from '../assets/tartelettes_aux_fraises.jpg';
import pain_complet from '../assets/pain_complet.jpg';

const productListMock = [
  {
    name: 'baguette traditionnelle ',
    categoryId: 3,
    id: '1ed',
    price: 15,
    cover: baguette_tradi,
  },
  {
    name: 'croissant',
    categoryId: 1,
    id: '2ab',
    price: 16,
    cover: croissant,
  },

  {
    name: 'tartelettes aux fraises',
    categoryId: 2,
    id: '3sd',
    price: 9,
    cover: tartelettes_aux_fraises,
  },
  {
    name: 'baguette blanche',
    categoryId: 3,
    id: '4kk',
    price: 20,
    cover: pain,
  },
  {
    name: 'pain au chocolat',
    categoryId: 1,
    id: '5pl',
    price: 25,
    cover: pain_chocolat,
  },

  {
    name: 'Baguette céréale',
    categoryId: 3,
    id: '8fp',
    price: 6,
    cover: pain_cereales,
  },
  {
    name: 'pain aux raisins',
    categoryId: 1,
    id: '7ie',
    price: 5,
    cover: pain_raisin,
  },
  {
    name: 'Pain complet',
    categoryId: 3,
    id: '9vn',
    price: 8,
    cover: pain_complet,
  },

  {
    name: 'Chausson aux pommes',
    categoryId: 1,
    id: '6uo',
    price: 4,
    cover: chaussons_pommes,
  },
  {
    name: 'moelleux chocolat',
    categoryId: 2,
    id: '6ui',
    price: 4,
    cover: moelleux_au_chocolat,
  },
  {
    name: 'eclair chocolat',
    categoryId: 2,
    id: '6ul',
    price: 4,
    cover: eclair_chocolat,
  },
  {
    name: 'Flan coco',
    categoryId: 2,
    id: '6uv',
    price: 4,
    cover: flan_coco,
  },
];

export default productListMock;
