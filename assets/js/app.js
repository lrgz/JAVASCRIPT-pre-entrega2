
/***
 * Proyecto  : Simulador de credito personal 
 * Fecha : 12/2022
 * Autor : Rodrigo Zerrezuela
 * Descripcion : de acuerdo a los datos de la persona y su sueldo 
 *               se extablece que se le brindara un credito equivalente a 3
 *               sueldos del informado os y puden devuelto en 1/2/3 años
 */

/***
 * Tipo  : Objeto
 * nombre : Persona
 * Fecha : 12/2022
 * Autor : Rodrigo Zerrezuela
 * Descripcion : Objto para el manejo de los datos de la persona
 */
class Persona{

    constructor( nombreApellido , email , telefono){
        this.nombreApellido = nombreApellido;
        this.email = email;
        this.telefono = telefono;
        this.sueldo = 0;
        this.capital = 0;
        this.cuotas =0;
    }



    getDatosPersona(){
        console.log("<-----datos Persona----->");
        console.log("Nombre y Apellido: ", this.nombreApellido);
        console.log("E-mail: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("<-----fin datos Persona----->");
    }
    
    SetPrestamo(sueldo,cuotas)
    {
        this.capital=sueldo * 3 ;
        this.cuotas=cuotas;
    }

    getPrestamo()
    {
        let prestamo = new Prestamo(this.capital,this.cuotas);
        prestamo.setPrestamoPlan();
        prestamo.getPrestamoPlan();
    }
    

}

/***
 * Tipo  : Objeto
 * nombre : Prestamo
 * Fecha : 12/2022
 * Autor : Rodrigo Zerrezuela
 * Descripcion : Objto para el manejo del prestamo
 */
class Prestamo{

    constructor(capital , cuotas){

        this.capital = capital;
        this.cuotas = cuotas;
        this.tasa = 75.50;
        this.plan =[];
        this.totales =[];
    }


    setPrestamoPlan(){

        let capital;
        let interes;
        let importeCuota;
        let totalCapital;
        let totalInteres;
        let totalCuota;
    
        for(let i=1;i<=this.cuotas;i++)
        {
            capital=(this.capital /this.cuotas).toFixed(2);
            interes=(((this.capital*this.tasa)/100)/this.cuotas).toFixed(2);
            importeCuota=(parseFloat(capital) + parseFloat(interes)).toFixed(2);
            console.log("* " , i ," * " ,capital," * " ,interes ," * " ,importeCuota," *");            
            this.plan.push({cuo:i,cap:capital,int:interes,imp:importeCuota}) ;
        }
        totalCapital=(this.capital).toFixed(2);
        totalInteres=(interes*this.cuotas).toFixed(2);
        totalCuota=(importeCuota*this.cuotas);
        this.totales.push({cap:totalCapital,int:totalInteres,cuo:totalCuota}) ;
    }

    getPrestamoPlan()
    {   
        console.log("***************************************");
        console.log("*****        PLAN DE CUOTAS       *****");
        console.log("***************************************");
        console.log("* Cuota * Capital * Interes * Importe *");
        console.log("***************************************");
        for(const plan of this.plan) 
        {
            console.log("* " ,plan.cuo ," * " ,plan.cap," * " ,plan.int ," * " ,plan.imp," *");
        }
        console.log("***************************************");
        console.log("* " , " TOTAL "," * " ,this.totales[0].cap," * " ,this.totales[0].int  ," * " ,this.totales[0].cuo," *");
        console.log("***************************************");

    }
}

/***
 * Tipo  : function
 * nombre : fncIngresoString
 * Fecha : 12/2022
 * Autor : Rodrigo Zerrezuela
 * Descripcion : funcion para el ingreso de datos tipo caracter
 */
function fncIngresoString(leyenda) {
    let prompString;
    let procesoOK;
    do
    {
        prompString = prompt(leyenda);

        if( prompString === '' || !isNaN(prompString))
        {
            alert(' Ingreso un datos invalido!!');
            procesoOK=0;
        }
        else
        {
            procesoOK= 1;
        }
    }
    while (procesoOK===0)

    return prompString
  }
  

/***
 * Tipo  : function
 * nombre : fncIngresoString
 * Fecha : 12/2022
 * Autor : Rodrigo Zerrezuela
 * Descripcion : funcion para el ingreso de datos tipo caracter
 */
function fncIngresoNumeric(leyenda) {
    let prompNumeric;
    let procesoOK;
    do
    {
        prompNumeric = prompt(leyenda);

        if(prompNumeric <= 0  || isNaN(prompNumeric))
        {
            alert(' Ingreso un datos invalido!!');
            procesoOK=0;
        }
        else
        {
            procesoOK= 1;
        }
    }
    while (procesoOK===0)

    return prompNumeric
}

/***
 * *********************** PROCESO ***********************
 */
//mensaje de bienvenida

alert ("BIENVENIDO AL SIMULADOR DE CREDITO")

// Datos de la persona

let nombreApellido = fncIngresoString('Ingrese Nombre y Apellido');

let email = fncIngresoString('Ingrese E-mail');

let telefono = fncIngresoNumeric('Ingrese Telefono');


let cliente = new Persona(nombreApellido,email,telefono);



console.log(cliente.getDatosPersona());


// consulta si quiere credito
let deseaCredito
do
{
    deseaCredito =prompt('Quiere calcular su credito  S/N').toUpperCase();
    

}
while(deseaCredito!='N' && deseaCredito!='S')

// solcito creditop
if (deseaCredito==='S')
{
    //comienza a solicicrar los datos para el credito
    let sueldo =fncIngresoNumeric('Ingrese su sueldo');
    let cuotas =fncIngresoNumeric('Ingrese plazo devolucion 1/2/3 años');

    //verifica que el plazo sea valido
    while (cuotas != 1 && cuotas != 2 && cuotas != 3 ){
        cuotas = parseInt(prompt('Ingrese plazo devolucion 1/2/3 años'))
    }

    // armo el credito
    cliente.SetPrestamo(sueldo,(cuotas*12));

    // retorno el plan del credito

    cliente.getPrestamo();
}

