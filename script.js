/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bikes = {
    nome: "Bike1",
    peso: 10
};

const bikes2 = {
    nome: "Bike2",
    peso: 15 
};

const bikes3 = {
    nome: "Bike3",
    peso: 8
};
 const bikes4 ={
    nome: "Bike4",
    peso: 12
 };
 const bikes5 = {
    nome: "Bike5",
    peso: 11
 };
    const arrayBikes = [bikes, bikes2, bikes3, bikes4, bikes5];
    let minPeso = arrayBikes[0];

    for (let i = 0; i < arrayBikes.length; i++) {
        if (arrayBikes[i].peso < minPeso.peso) {
            minPeso = arrayBikes[i];
        }
    
    }
    console.log(`La bici con il peso minore è ${minPeso.nome}`);


 


/*Snack 2


/*Creare un array di oggetti di squadre.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/
const teams = {
    nome : "juventus",
    puntiFatti : 0,
    falliSubiti : 0
}
const teams2 = {
    nome : "milan",
    puntiFatti : 0,
    falliSubiti : 0
}
const teams3 = {
    nome : "inter",
    puntiFatti : 0,
    falliSubiti : 0 
}
const teams4 = {
    nome : "napoli",        
    puntiFatti : 0,
    falliSubiti : 0
}
const teams5 = {
    nome : "roma",
    puntiFatti : 0,
    falliSubiti : 0
}
/*Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
const arrayteames = [teams, teams2, teams3, teams4, teams5];


 for (let i = 0; i < arrayteames.length; i++) {
    arrayteames[i].puntiFatti = Math.floor(Math.random() * 100);
    arrayteames[i].falliSubiti = Math.floor (Math.random() * 100);  
    }

