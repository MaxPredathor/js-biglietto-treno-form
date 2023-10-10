let costoTotale

const tariffa = 0.21;
const biglietto = document.querySelector('.d-none');


const button = document.querySelector('.btn-primary');
console.log(button);

button.addEventListener('click',

    function(){

        const name = document.getElementById('nameInput').value;
        const km = parseInt(document.getElementById('km').value);
        const age = document.getElementById('age').value;

        if(name === '' || !isNaN(parseInt(name))){
            alert('Devi inserire valori corretti')
        }else if(km === '' || isNaN(km)){
            alert('Devi inserire valori corretti')
        }else{
            document.getElementById('nomePasseggero').innerHTML = `
            ${name}
            `

            const costoTotale = km * tariffa;
            
            if(age === 'Minorenne'){
                result = costoTotale - (costoTotale * 0.20)
                console.log(age)
            }else if(age ==='Over 65'){
                result = costoTotale - (costoTotale * 0.40)
            }else {
                result = costoTotale
            }
            document.getElementById('costoBiglietto').innerHTML = `
                ${result.toFixed(2)}
            `

            function passengerCarNumGenerator(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              carrozza = passengerCarNumGenerator(1, 10);
              numeroCP = passengerCarNumGenerator(90000, 100000);

              document.getElementById('numeroCarrozza').innerHTML = `
              ${carrozza}
              `
              document.getElementById('numeroCP').innerHTML = `
              ${numeroCP}
              `
              

            if(age === 'minorenne'){
                document.getElementById('tipoBiglietto').innerHTML = `
                ${age}
            `
            }else if(age ==='Over 65'){
                document.getElementById('tipoBiglietto').innerHTML = `
                ${age}
            `
            }else {
                document.getElementById('tipoBiglietto').innerHTML = `
                ${age}
            `
            }
            biglietto.classList.remove('d-none');
            
            
        }
})
// if(parseInt(km)){  
//  }else{
//      alert('Questo non è un kilometraggio valido, reinserire il valore')
//      window.location.reload()
// }


// if(parseInt(età)){  
// }else{
//     alert('Questo non è un valore valido, reinserire il valore corretto')
//     window.location.reload()
// }

// let costo = (km * tariffa);
// console.log(costo);

// if(età < 18){
//     costoTotale = costo - (costo * scontoVenti);

// }else if (età >= 65){
//     costoTotale = costo - (costo * scontoQuaranta);

// }else {
//     costoTotale = costo
// }
