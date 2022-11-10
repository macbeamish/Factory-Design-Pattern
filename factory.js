//Factory Design Code challenge by Thomas Beamish for Mission Ready - 10/11/2022



function carFactory(make, model, year, rego){
    return{
        make: make,
        model: model,
        year: year,
        rego: rego,
        readOut(){
            return `This is a beautiful ${this.make} ${this.model} It was manufactured in ${this.year}. The registration number is ${this.rego}`
        }
    }

}

const cars  = [] ;
const car1 =  carFactory("Nissan","Wingroad", "2002", "GHB526");
cars.push(car1);
const car2 =  carFactory("Toyota","Aqua", "2007", "ZHY432");
cars.push(car2);
const car3 =  carFactory("Mazda","Axela", "2004", "LLK889");
cars.push(car3);
const car4 =  carFactory("Hyundai","Tucson", "2012", "BZV441");
cars.push(car4);

for (let i = 0; i < cars.length; i++) {
    car = cars[i];
    console.log(car.readOut());
}   
