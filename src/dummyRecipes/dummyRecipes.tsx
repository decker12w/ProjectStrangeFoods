import dummyRecipe from '../types/TypeDummyRecipe';

function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const dummyRecipes : dummyRecipe[] = [{
    name:'1',
    image:'public/img/food1.png',
    id: +(Math.random)
   },{
    name:'Coisa doida2',
    image:'public/img/food2.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food3.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food4.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food5.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food6.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food7.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food8.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food9.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food10.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food11.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food12.png',
    id: +(Math.random)
   },{
    name:'Coisa doida',
    image:'public/img/food13.png',
    id: +(Math.random)
   }]

const dummyReal: dummyRecipe[] = [];
for (let i = 0; i < 8; i++) {
  const randomIndex = getRandomInt(0, dummyRecipes.length);
  dummyReal.push(dummyRecipes[randomIndex]);
  dummyRecipes.splice(randomIndex, 1);
}

export default dummyReal;