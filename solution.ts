const formatValue = (value: number | string | boolean) : string | number | boolean =>{

    if(typeof value === "string"){
        return value.toUpperCase();

    }
     if(typeof value === "number"){

        return value * 10;

    }

    if(typeof value === "boolean"){

        return !value;

    }

    return value;

}




const getLength = (value: string | any[]): number =>{

    if(typeof value === "string"){

        return value.length;

    }

    if(Array.isArray(value)){
        return value.length;
    }


    return 0;
    
}







class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{

        return (`'Name: ${this.name}, Age: ${this.age}'`);

    }

}





 type Item = {
    title: string;
    rating: number;
}

const filterByRating = (items: Item[]):Item[] => {
    return items.filter(item => item.rating >= 4);
}







interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;

}
const filterActiveUsers = (users: User[]):User[] =>{

    return users.filter(user => user.isActive === true);

    

}




interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book : Book): void =>{

     console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable === true ? "Yes" : "No"}`);

}











const getUniqueValues = (array1: (number | string)[], array2: (number | string)[]): (number | string)[] =>{

    let uniqueNumber : (number | string)[] = [];

    for(let i = 0; i < array1.length; i++){

        let exist = false;


        for(let j = 0; j < uniqueNumber.length; j++){

            if(array1[i] === uniqueNumber[j]){
                exist = true;
            }

            

        }

        if(!exist){

           uniqueNumber.push(array1[i])

        }

       

        }





         for(let i = 0; i < array2.length; i++){

        let exist = false;

        

      

        for(let j = 0; j < uniqueNumber.length; j++){

            if(array2[i] === uniqueNumber[j]){
                exist = true;
            }

            

        }

        if(!exist){

           uniqueNumber.push(array2[i])

        }

    
        }

               return uniqueNumber;
        
    }







type product ={
name : string;
price : number;
quantity : number;
discount? : number;

}
const calculateTotalPrice = (products : product[]) =>{
    
    return products
    .map((item) =>{
        const totalPrice = item.price * item.quantity;


        if(item.discount){
            const discountAmount = (totalPrice * item.discount) / 100;
            return totalPrice - discountAmount;
        }else{
            return totalPrice;
        }
    })

    .reduce((total, current) => total + current, 0);




}














   

  





