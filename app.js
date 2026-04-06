let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domin = ['.com',' .net', '.io', '.es'];

for (let i = 0; i < pronoun.length; i++) {

 
 for (let j = 0; j < adj.length; j++) {

  
 for (let k = 0; k < noun.length; k++) {

 for (let d = 0; d < domin.length; d++) {
        console.log(pronoun[i] + adj[j] + noun[k] + domin[d]);
      }
    }
  }
}

pronoun.forEach(function(p) {
  adj.forEach(function(a) {
    noun.forEach(function(n) {
      domin.forEach(function(dm) {
        console.log(p + a + n + dm);
      });
    });
  });
});