sys = require('sys');

var cube = exports;

cube.containPrimerNumber = function(n1, n2, n3){
  var arr_n1 = n1.split('');
  var arr_n2 = n2.split('');
  var arr_n3 = n3.split('');
  
  var sum_arr1 = sum_array(arr_n1);
  var sum_arr2 = sum_array(arr_n2);
  var sum_arr3 = sum_array(arr_n3);

  return (!is_prime(sum_arr1) && !is_prime(sum_arr2) && !is_prime(sum_arr3));
}


var is_prime = function(num){
  var prime;
  if (isNaN(num) || num < 0) {
    return false;
  }
  if (num == 1 || num == 2) {
    return true;
  }
  for (var i=2;i<num;i++) {
    if (num % i != 0){ 
      var prime=true;
    }
    if (num % i == 0){ 
      var prime=false;
      break;
    }
  }
  return prime;
};


var sum_array = function(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  };
  return sum;
};
