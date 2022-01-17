const studente={
    nome:"Gianluca",
    cognome:"Scarnicci",
    eta:23,
};
for(let chiave in studente){
    console.log(chiave + ":" + studente[chiave]);
}
let studenti=[
    {
    nome:"Gianluca",
    cognome:"Scarnicci",
    eta:23,
},
{
    nome:"pippo",
    cognome:"topolino",
    eta:21,
},{
 nome:"gesu",
 cognome:"cristo",
 eta:33,
},
];
for(let i=0;i<studenti.length;i++){
    let studenteCorrente=studenti[i];
    console.log("nome:"+studenteCorrente.nome+" cognome:"+studenteCorrente.cognome);
}
let nomeStudente=prompt("inserisci il nome dello studente");
let cognomeStudente=prompt("inserisci il cognome dello studente");
let etaStudente=prompt("inserisci l'eta dello studente");
studenti.push({
    nome:nomeStudente,
    cognome:cognomeStudente,
    eta:etaStudente,
})
for(let i=0;i<studenti.length;i++){
    let studenteCorrente=studenti[i];
    console.log("nome:"+studenteCorrente.nome+" cognome:"+studenteCorrente.cognome+" eta:"+studenteCorrente.eta);
}