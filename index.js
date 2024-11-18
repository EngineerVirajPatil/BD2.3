const express = require('express');
const { resolve } = require('path');
const { monitorEventLoopDelay } = require('perf_hooks');

const app = express();
const port = 3000;

let products=[
  {
    name:'Laptop',
    price:50000,
    category:'Electronics'
  },
  {
    name:'Mobile',
    price:20000,
    category:'Electronics'
  },
  {
    name:'Shirt',
    price:1500,
    category:'Apparel'
  },
  {
    name:'Mixer',
    price:4000,
    category:'Home Appliance'
  }
];

let cars=[
  {
    make:'Maruti',
    model:'Swift',
    mileage:1500
  },
  {
    make:'Hyundai',
    model:'i20',
    mileage:25000
  },
  {
    make:'Tata',
    model:'nexon',
    mileage:30000
  }
];


let movies=[
  {
    title:'3 Idiots',
    genere:'Comedy',
    rating:9
  },
  {
    title:'Dangal',
    genere:'Drama',
    rating:10
  },
  {
    title:'Bahubali',
    genere:'Action',
    rating:8
  }
];


let orders=[
  {
    orderId:1,
    CustomerName:'Rahul',
    status:'shipped'
  },
  {
    orderId:2,
    CustomerName:'Sita',
    status:'pending'
  },
  {
    orderId:3,
    CustomerName:'Jamuna',
    status:'shipped'
  }
];

function filterByCategory(productObj,category){
  return productObj.category===category;
}

app.get('/products/category/:category',(req, res)=>{
 let category=req.params.category;
 let result=products.filter(productObj=>filterByCategory(productObj,category));
 res.json(result);
})

function filterByMileage(carObj,mileage){
  return carObj.mileage<mileage;
}

app.get('/cars/mileage/:mileage',(req, res)=>{
 let mileage=req.params.mileage;
 let result=cars.filter(carObj=>filterByMileage(carObj,mileage));
 res.json(result);
})

function filterByRating(movieObj,rating){
  return movieObj.rating>rating;
}

app.get('/movies/rating/:rating',(req, res)=>{
 let rating=req.params.rating;
 let result=movies.filter(movieObj=>filterByRating(movieObj,rating));
 res.json(result);
})

function filterByOrderStatus(orderObj,status){
 return orderObj.status===status;
}

app.get('/orders/status/:status',(req, res)=>{
  let status=req.params.status;
  let result=orders.filter(orderObj=>filterByOrderStatus(orderObj,status));
  res.json(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
