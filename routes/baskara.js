const express = require("express");
const router = express.Router();

router.get('/', (req,res) =>{
 res.setHeader('Content-Type', 'text/html');

 res.send(`
      <h1>
      Baskara Calculator
      <h1/>
        <form action="/baskara/calculate-baskara" method="post">
            <input type="text" name="a" placeholder="Enter first value - A" required />
            <input type="text" name="b" placeholder="Enter second value - B" required />
            <input type="text" name="c" placeholder="Enter third value - C" required />
            <button type="submit">Calculate Roots</button>
        </form>
`)
} )

router.post('/calculate-baskara', (req, res)=> {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    const c = parseFloat(req.body.c);

    const delta = b * b - 4 * a * c

    if(a === 0 || delta < 0){
        return res.send("<h3>This equation does not have real roots<h3/>")
    }

    else{
        const x1 = ((-b + Math.sqrt(delta)) / ( 2 * a)).toFixed(4)
        const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)

        
        res.setHeader('Content-Type', 'text/html');
        res.send(`
        <h3>Coeficiente A :  ${a}<br/><h3/>
        <h3>Coeficiente B :  ${b}<br/><h3/> 
        <h3>Coeficiente C :  ${c}<br/><h3/>   
        X1 = ${x1}  <br/>  
        X2 = ${x2}
        
    `);}
})

module.exports = router;