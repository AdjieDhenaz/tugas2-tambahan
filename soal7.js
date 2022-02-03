const person =['fhmi', 'ami', 'fahmi', 'ahmi', 'fahmi']
function filname(){
    const filter = person.filter(el => {
        return el == 'fahmi'
    })
    console.log(filter);
}
filname()