# .rniture
Projecte presentat per la prova tècnica realitzada per la posició de FrontEnd a [@Floorfy](https://floorfy.com/es/).

## Project setup
La prova s'ha realitzat amb Vue. per instalar vue:

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
Un cop instalat vue i realitzat el clon del projecte, es poden instalar les dependències utilizant:

```
npm install
```
Una de les dependències més importants és [json-server](https://github.com/typicode/json-server), que fa de mock-backend per la BD del projecte, per instalar-lo, utilitzem:

```
npm install -g json-server
```
## Project startup
Per començar el projecte primerament s'ha de obrir el `json-server`, ho farem utilitzant la següent línia a la carpeta root del projecte.
```
json-server --watch data/db.json
```
El projecte està configurat perquè els endpoints del json-server estiguin a `http://localhost:3000`, tot i així, es pot canviar utilitzant el fitxer `.env`.

Per a posar en marxa la web, podem utilitzar la següent comanda de Vue:
```
npm run serve
```
