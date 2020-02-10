const a = 'Hola';
const b = 'Meli';


(function test(message)
{
    console.log(a+b+message);
    (function otroTest()
    {
        console.log(a+b);
    })
    ()
})('Programa')