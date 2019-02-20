module.exports = function getZerosCount(number, base) {
  var bbF = factorize(base);
  var Z = [];
  for(i = 0; i < bbF.length; i++) {
    var j = 1;
    Z[i] = 0;
    // Legendre formula
    while(number / Math.pow(bbF[i][0],j) > 1) {
      Z[i] += ~~(number / Math.pow(bbF[i][0],j));
      j++;
    }
    Z[i] = ~~(Z[i] / bbF[i][1]);
  }
  Z.sort(compareNum);

  function compareNum(a, c) {
    return a - c;
  }

  function factorize(b) {
    var bF = [];
    var x = b, z = 0;
    for(var p = 2; p <= b; p++) {
    var q = 1;
      if(x % p > 0 ) continue;
      while(x % p == 0) {  
        bF[z] = [p,q];    
        x /= p;
        q++;
      }
      z++;
    }  
    return bF;
  }
return Z[0];
};
