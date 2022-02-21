var bin = parseInt(prompt('Digite um numero binário para ser transformado em decimal '))

function bidec(bin) {
	var dec = 0, x = 0, r;
    
    while (bin != 0) {
      r = bin % 10;
      bin = Number.parseInt(bin / 10);
      dec = dec + r * Math.pow(2, x);
      ++x;
    }
    return dec;
  }
  var dec = bidec(bin);
  document.writeln(`O valor de ${bin} convertido para decimal é: ${dec}`);
   
    
