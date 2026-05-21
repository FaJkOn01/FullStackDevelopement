//console.log('GoodBye!');

//var x = 10;

//var _value = "Digital School";

//var 123 = 55; //wrong way
//var *value = 56; //wrong way

//1.   Numbers: 5, 6.5, 7, etc.

//2.    String: “Hello GeeksforGeeks” etc.

//3.    Boolean: Represent a logical entity and can have two values: true or false.

//4.    Null: This type has only one value: null.

//5.    Undefined: A variable that has not been assigned a value is undefined.

//6.    Object: It is the most important data type and forms the building blocks for modern JavaScript.


//The name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.

// After the first letter we can use digits (0 to 9), for example, value1.

//  JavaScript variables are case sensitive, for example, x and X are different variables.



//var a= 50 + 50;
//console.log(a);

//var b = 20;
//var c = 30;


//var d = b + c;

//console.log(d);


//var s = 32;
//var k = 44;
//var h = s * k;
//console.log(h);

//var a = 99;
//a++;
//console.log(a);
//a--;
//console.log(a);



//var x = 15;
//x+=5;
//console.log(x);

//var x = 5;
//var y = 5;
//console.log(x == y);

//console.log(x != y);

//var firstName = "Digital";
//var lastName = "School";
//var fullName = firstName + " " + lastName;
//console.log(fullName);

//var school = "Our School";
//console.log(`Hello from ${school}`);

//var klub = "SHF ZIDANE";
//console.log(`Hello from ${klub}`)

//var age = 24;
//console.log(age >= 18 && age <= 65);

//var var1= 5;
//var var2 = 6;
//console.log(var1 == 5 || var2 == 5);

//var var4 = 9;
//var var5 = 10;
//console.log(!(var4 == var5));




























/*var shkollafutbollit = "SHF ZIDANE";
console.log(`Pershendetje nga ${shkollafutbollit}`)

var var1 = 10;
var var2 = 20;
var var4 = var1 * var2;
console.log(`Prodhimi i var1 dhe var2 eshte: ${var4}`);

var var5 = 100;
var5++;
console.log(var5);






function toCelsius(Fahrenheight){
    return ( 5 / 9)* (Fahrenheight-32 );

}


var result = toCelsius(54)
console.log("Fahrenheight in celsius is "+result+" degrees")
*/

function digitalschool(){
    var shkolla = ' DigitalSchool';
    alert(shkolla)
}

digitalschool()

function siperfaqja_e_trekendeshit(baza, lartesia){
    return baza * lartesia * 0.5
}
console.log('Siperfaqja e trekendeshit eshte: ' + siperfaqja_e_trekendeshit(5, 7) + ' cm2')

var audia = {
    type: "A6",
    color: "white",
    viti_i_prodhimit: 2016,
    kilometra: 220. 000,
    karburanti: 'Disel',
    engine:function(){
        alert('Vroooom')
    },
    get getkilometra(){
        return this.kilometra
    },
    set setkilometra(km){
        this.kilometra = km;
    }

}

alert(audia.type)

var grupi_7 = {
    niveli : 'Web ADV',
    ora: '19:30',
    nr_nx : '14'


}

alert(grupi_7.nr_nx)

var klasa_7_2 = {
    nr_nx: '24',
    djem : '16',
    kati : '3',
    kujdestari:function(){
        alert('Edon Kelmendi')
    }

}

alert(klasa_7_2.djem)

audia.engine()

klasa_7_2.kujdestari()
console.log(audia.getkilometra)
audia.setkilometra = 120;
console.log(audia.getkilometra)






