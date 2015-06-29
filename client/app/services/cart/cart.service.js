import angular from 'angular';
import data from './example';

let CartService = angular.module('CartService', [])
.service('CartService', function($timeout) {  
  this.getAll = () => {
    return data;
  }
  this.getOne = (id) => {
    return data[id];
  }
});

export default CartService;
