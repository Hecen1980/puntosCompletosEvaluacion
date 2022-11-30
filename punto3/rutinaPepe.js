let despertador = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('No suena el despertador')
    }, 2000);
    
})
despertador.then((resultado)=>{
    console.log(resultado)

}, (error)=>{
    console.log(error)
}
);
let transmilenio = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('paro en el portal y no pude coger transporte')
    }, 4000);
    
});
transmilenio.then((resultado)=>{
    console.log('paro en el portal y no pude coger transporte')
}, (error)=>{
    console.log(error);
});
let estudiar = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('llega tarde y no puede entrar a clases')
    }, 6000);
    
});
estudiar.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});
let almuerzo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('no puede almorzar porque le sale un pelo en la sopa')
    }, 8000);
    
});
almuerzo.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});
let bellatrix = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Se olvida del carnet y no lo dejan ingresar')
    }, 8000);
    
});
bellatrix.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});
let robo= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('lo roban')
    }, 10000);
    
});
robo.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});
let vueltaCasa= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Ha perdido las llaves de su casa y le toca dormir en el parque')
    }, 12000);
    
});
vueltaCasa.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});
let netflix= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Olvido pagar la mensualidad de Netflix… se desbarata la cama y no tiene donde dormir')
    }, 14000);
    
});
netflix.then((resultado)=>{
    console.log(resultado)
}, (error)=>{
    console.log(error);
});