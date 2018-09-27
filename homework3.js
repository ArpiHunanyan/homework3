 
 const f1 = function (name,fName,age,) { 
 	return name + "  " + fName + "  " + " is " + " " + age + "  " + "years old"
 };

 console.log(f1("Nelli","Kirakosyan","17"));

 const aua = function () {
 	return "AUA student"
 };

 console.log(aua());

const f2 = function (name,fName){
 	console.log(name+" "+ fName +" " +"hallo")

 };

 f2("Rita","Soxoyan");

  const f3 = function (a,b,c) {
 	 if (a.length  > b.length  &&  a.length  > c.length ) {
 	return	a;
    }
 	else if (b.length > a.length  && b.length  > c.length ) {
 			return b;
 		} else {
 			return c;
 		}
 	};

 const d = f3("bari","hi","hallo");
 console.log (d);
 
 const past = function (number1,number2) {
  if(number1 === number2) {
 		return (0);
 	}
 	else if (number1 > number2) {
 		return (1);
 	}
 	else return (-1);
 };

 console.log(past(15,89));

const f4 = function (argument1,argument2) {
	return argument1 * argument2
};

const f5 = function (numberA,numberB) {
	return numberA / numberB
};

const triangleArea = function(base,height) {
	return f5(f4(base,height),2)
};
console.log(triangleArea(15,20));

const numLength = function (numberL) {
 const a = "'" + numberL + "'";
 const b = a ;
 return b.length - 2 ;

 } ;
const l = numLength(576778987654) ;
console.log(l);

const f6 = function (string1,string2,numberS) {
 if (string1.length + string2.length > numberS) {
		return 1 }
		else {
		return	-1
		};
	};

console.log(f6("yes","no",9));

const runStuff = function (oneN,towN,stringN) {
	 if(stringN === "rectangle") {
		return f4(oneN,towN);
	}
	else if (stringN === "triangle") {
    return triangleArea(oneN,towN);
	}
	else {
		return -1;
	}
};

const vuv = runStuff(10,20,"rectangle");
console.log (vuv);
