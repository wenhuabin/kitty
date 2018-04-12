
let s1 = "foo-style-css";
s1 = s1.replace(/\-(\w)/g, function(all, letter){
          return letter.toUpperCase();
        });

console.log(s1);

let s2 = "fooStyleCss";
s2 = s2.replace(/([A-Z])/g, function(all, letter){
        return '-' + letter.toLowerCase();
    });

let s3 = s2.replace(/([A-Z])/g, "-$1");

console.log(s2);
console.log(s3);



