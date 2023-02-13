# node_example

## HTTP Get

Expressissä get-endpointit voidaan määrittää esimerkiksi näin 
<pre>
app.get('/endpoint' .....)
</pre>
Jos sanan edessä on kaksoispiste, sana onkin muuttujan nimi esimerkiksi
<pre>
app.get('/esim2/:fname' .....)
</pre>
Ja edellä muuttuja on 'pakollinen'. Jos haluat sen vapaaehtoiseksi, voit 
määrittää sen näin 
<pre>
app.get('/esim2/:fname?' .....)
</pre>
Ja muuttujan arvoon päästään käsiksi näin:
<pre>
request.params.fname
</pre>

## Middleware funktio

On funktio, jota kutsutaan automaattisesti ja sen määritys tehdään
**use** sanalla.

Seuraava Middleware tarvitaan, jotta sovellus osaa käsitellä JSON-muotoista dataa
<pre>
app.use(express.json());
</pre>
Ja seuraava, jotta voimme lähettää POST ja PUT metodeissa "form-urlencoded"-dataa
<pre>
app.use(express.urlencoded({extendend : false}));
</pre>