/* This is a data model for all the enslaved women 
that Susanna Bishop delivered at Mount Vernon*/


var slavebirths = [ {slave: "Betty", midwife: "Susanna Bishop", date: 1767, amount: "10s", farm: "Unknown"}, 
                   {slave: "Kate", midwife: "Susanna Bishop", date: 1767, amount: "10s", farm: "Unknown"},  
                   {slave: "Sue", midwife: "Susanna Bishop", date: 1767, amount: "10s", farm: "Dogue Run"},  
                  {slave: "Sarah", midwife: "Susanna Bishop", date: 1768, amount: "10s", farm: "Unknown"}, 
                   {slave: "Phillis", midwife: "Susanna Bishop", date: 1769, amount: "10s", farm: "Mansion House"},  
                  {slave: "Muddy Hole Kate", midwife: "Susanna Bishop", date: 1769, amount: "10s", farm: "Muddy Hole"}, 
                   {slave: "Catherine", midwife: "Susanna Bishop", date: 1769, amount: "10s", farm: "Unknown"},  
                  {slave: "Sarah", midwife: "Susanna Bishop", date: 1769, amount: "10s", farm: "Unknown"}, 
                  
];
 
 /*This is my constructor funcion*/             
function slave(first, midwife, date, amount, farm) {
    this.first = first;
    this.midwife = midwife;
    this.date = date;
    this.amount = amount;               
    this.farm = farm;
    this.toString = function() {
      return this.midwife + " was paid " + this.amount  + " in " + this.date + " to deliver " + this.first + " at " + this.farm;

    },
    this.print = function() {
      console.log(this.midwife + " was paid " + this.amount  + " in " + this.date + " to deliver " + this.first + " at " + this.farm);

    }
}
 /*These are my new slave objects*/
var Moll = new slave("Moll", "Susanna Bishop", 1771, "10s", "Unknown");
var Betty = new slave("Betty", "Susanna Bishop", 1771, "10s", "Unknown");
var Alce = new slave("Alce", "Susanna Bishop", 1771, "10s", "Mansion House farm");
var Doll = new slave("Doll", "Susanna Bishop", 1772, "10s", "Unknown");
var Sall = new slave("Sall", "Susanna Bishop", 1772, "10s", "Mansion House farm");
var SlaveObjects = [];
SlaveObjects.push(Moll, Betty, Alce, Doll, Sall);
console.log(SlaveObjects);

document.write("<ul>")
for(var i = 0; i < SlaveObjects.length; i++) {
  document.write(list(SlaveObjects[i].toString()));

}
document.write("</ul>")
//console.log(Alce.midwife + " was paid " + Alce.amount  + " in " + Alce.date + " to deliver " + Alce.first + " at " + Alce.farm) 
//document.write(Alce.midwife + " was paid " + Alce.amount  + " in " + Alce.date + " to deliver " + Alce.first + " at " + Alce.farm);

//Susanna Bishop was paid 10s in 1771 to deliver Alce at Mansion House farm

function list(string) {
  return "<li>" + string + "</li>";

}
