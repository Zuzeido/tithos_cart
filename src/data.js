const menu = [
  /* Entrantes */
  {
    id: 1,
    title: 'Fingers de Pollo',
    category: 'Entrantes',
    price: '8',
    img: './images/fingers.jpeg',
    desc: 'Tiras de pollo rebozadas acompañadas de patatas fritas'
  },
  {
    id: 11,
    title: 'Tabla de ibéricos',
    category: 'Entrantes',
    price: '12',
    img: './images/tabla.jpeg',
    desc: 'Jamón ibérico y queso curado'
  },
  {
    id: 12,
    title: 'Tabla de ahumados',
    category: 'Entrantes',
    price: '13',
    img: './images/ahumados.jpeg',
    desc: 'Ideal para compartir entre amigos y familia'
  },
  {
    id: 13,
    title: 'Cazuela de huevos rotos',
    category: 'Entrantes',
    price: '12,50',
    img: './images/huevos.jpeg',
    desc: 'Riquiíssimosssss'
  },
  {
    id: 14,
    title: 'Fajitas Tithos',
    category: 'Entrantes',
    price: '9,90',
    img: './images/fajitas.jpeg',
    desc: '¡¡NUEVO!!'
  },
  {
    id: 15,
    title: 'Pulpo a la gallega',
    category: 'Entrantes',
    price: '15',
    img: './images/pulpo.jpeg',
    desc: 'Pulpo a la gallega con pimentón de la vera y patata cocida'
  },
    /* Raciones */
  {
    id:2,
    title: 'Oreja',
    price: '8,50',
    img: './images/oreja.jpeg',
    desc: '',
    category: 'Raciones',
  },
  {
    id:21,
    title: 'Patatas Salsas',
    price: '6,90',
    img: './images/patatas.webp',
    desc: '',
    category: 'Raciones',
  },
  {
    id:22,
    title: 'Calamares a la romana',
    price: '9,90',
    img: './images/calamares.jpeg',
    desc: '',
    category: 'Raciones',
  },
  {
    id:23,
    title: 'Chopitos a la Andaluza',
    price: '8,90',
    img: './images/chopitos.webp',
    desc: '',
    category: 'Raciones',
  },
  {
    id:24,
    title: 'Revuelto de morcilla',
    price: '8,90',
    img: './images/morcilla.jpeg',
    desc: '',
    category: 'Raciones',
  },
  {
    id:25,
    title: 'Picadillo de chorizo',
    price: '8',
    img: './images/picadillo.jpeg',
    desc: '',
    category: 'Raciones',
  }, 
  {
    id:26,
    title: 'Lacón a la plancha o al ajillo',
    price: '9',
    img: './images/lacon.jpeg',
    desc: '',
    category: 'Raciones',
  },
  {
    id:27,
    title: 'Sepia a la plancha',
    price: '10',
    img: './images/sepia.jpeg',
    desc: '',
    category: 'Raciones',
  },
  {
    id:28,
    title: 'Alitas de pollo',
    price: '9',
    img: './images/alitas.jpg',
    desc: '',
    category: 'Raciones',
  },

  /* Ensaldas */
  {
    id:3,
    title: 'La Mayor',
    price: '9',
    desc: 'Pimientos asados acompañados de láminasde ventresca sobre una cama de lechugas al aliño',
    img: './images/lamayor.jpeg',
    category: 'Ensaladas',
  },
  {
    id:31,
    title: 'Cesar Tithos',
    price: '9',
    desc: 'Mezclum de lechugas, tomates de la huerta, tiras de pollo, dados de pan tostado, queso parmesano y salsa Cesar',
    img: './images/cesar.jpeg',
    category: 'Ensaladas',
  },
  {
    id:32,
    title: 'Mixta',
    price: '8',
    desc: 'Mezclum de lechugas, tomate , cebolla, bonito del norte y espárragos blancos',
    img: './images/mixta.jpeg',
    category: 'Ensaladas',
  },
  /* Tostas */
  {
    id:4,
    title: 'Ibérica',
    desc: 'Jamón ibérico, tomate triturado y aceite de oliva',
    img: './images/jamon.jpeg',
    price: '8',
    category: 'Tostas',
  },
  {
    id:41,
    title: 'Mediterránea',
    desc: 'Mezclum de lechugas, tomates, mahonesa y salmón ahumado',
    img: './images/salmon.webp',
    price: '6,90',
    category: 'Tostas',
  },
  {
    id:42,
    title: 'Matrimonio',
    desc: 'Triturado de tomate, anchoas y boquerones en vinagre',
    img: './images/anchoas.jpeg',
    price: '6,90',
    category: 'Tostas',
  },
  {
    id:43,
    title: 'Norteña',
    desc: 'Revuelto de huevo y gulas con mahonesa y vinagre de módena',
    img: './images/gulas.jpeg',
    price: '6,90',
    category: 'Tostas',
  },
  {
    id:44,
    title: 'Ventresca',
    desc: 'Tomate y láminas de ventresca sobre una cama de pimientos asados',
    img: './images/ventresca.jpeg',
    price: '6,90',
    category: 'Tostas',
  },
  {
    id:45,
    title: 'Extremeña',
    desc: 'Tiras de lechuga, pimientos asados y carrillada de cerdo a la plancha con vinagre de Jerez',
    img: './images/extremeña.jpeg',
    price: '6,90',
    category: 'Tostas',
  },
  {
    id:46,
    title: 'Tithos',
    desc: 'Queso brie con solomillo de cerdo y cebolla caramelizada',
    img: './images/tithostosta.jpeg',
    price: '7,50',
    category: 'Tostas',
  },
  /* Tortillas */
  {
    id:5,
    title: 'Clásica',
    desc: 'Auténtica tortilla de patata con cebolla',
    img: './images/tortilla-patatas.jpeg',
    price: '8,90',
    category: 'Tortillas',
  },
  {
    id:51,
    title: 'Paisana',
    desc: 'Tortilla de patata con pimientos',
    img: './images/tortilla-paisana.jpeg',
    price: '8,90',
    category: 'Tortillas',
  },
  {
    id:6,
    title: 'Normal',
    desc: 'Lechuga, tomate, queso y salsa Tithos' ,
    price: '99',
    img:'./images/hnormal.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:61,
    title: 'Tithos',
    desc: 'Lechuga, tomate, jamon york, queso, huevo frito y bacon' ,
    price: '4,50',
    img:'./images/htithos.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:62,
    title: 'Mixto',
    desc: 'Jamon y queso' ,
    price: '2,50',
    img:'./images/smixto.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:63,
    title: 'Mixto con huevo',
    desc: 'Jamon, queso y huevo' ,
    price: '3,50',
    img:'./images/smixtohuevo.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:64,
    title: 'Vegetal',
    desc: 'Lechuga, tomate, mahonesa, atún y esparragos' ,
    price: '4',
    img:'./images/svegetal.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:65,
    title: 'Vegetal con huevo',
    desc: 'Lechuga, tomate, huevo frito mahonesa, atún y espárragos' ,
    price: '4,70',
    img:'./images/svegetalhuevo.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:67,
    title: 'Sandwich Tithos',
    desc: 'Lechuga, tomate, huevo frito, bacon, jamón york y queso' ,
    price: '5',
    img:'./images/stithos.png',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:68,
    title: 'Bocadillo de Lomo',
    desc: '' ,
    price: '4',
    img:'./images/blomo.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:69,
    title: 'Bocadillo de Queso',
    desc: '' ,
    price: '5',
    img:'./images/bqueso.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:70,
    title: 'Bocadillo de Vegetal',
    desc: '' ,
    price: '5',
    img:'./images/bvegetal.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:72,
    title: 'Bocadillo de Tortilla',
    desc: '' ,
    price: '4,60',
    img:'./images/btortilla.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:73,
    title: 'Bocadillo de Lacón',
    desc: '' ,
    price: '5',
    img:'./images/blacon.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:74,
    title: 'Bocadillo de Bacon',
    desc: '' ,
    price: '4',
    img:'./images/bbacon.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
  {
    id:75,
    title: 'Bocadillo de Atún con pimientos',
    desc: '' ,
    price: '4,50',
    img:'./images/batun.jpeg',
    category: 'Hamburguesas y Sandwiches',
  },
];
export default menu;
