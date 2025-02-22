# Feladatok

## 1. feladat

- Hozz létre az index.html fájlban három gombot! 
- A gombok szövegei az alábbiak legyenek: *Első, Második, Harmadik*. 
- Mindegyik gombnak add meg a `button` class-t!
- Írj egy függvénykifejezést a `main.js` fájlba arrow function segítségével, a függvény neve `handleClick` legyen! 
- A `handleClick` függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, amely kattintásra kiírja a gomb szövegét a konzolra. 
- A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőket!

## 2. feladat

- A `lib.js` fájlban dolgozz!
- Hozz létre két függvénykifejezést arrow function-nel!
- A függvények neve `summation` és `subtraction` legyen.
- Mindegyik függvény két paramétert kap, ezek neve `a` és `b`.
- Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelmezett érték a `0` legyen.
- A `summation` visszatér a két szám összegével, a `subtraction` visszatér a két szám különbségével.

## 3. feladat

- A `person.js` fájlban dolgozz!
- Hozz létre egy függvénykifejezést arrow function-nel! 
- A függvény neve `personDataLog` legyen. 
- A függvény paraméterként egy objektumot vár, amely egy `firstName`, `lastName` és `age` tulajdonságokkal rendelkezik.
- Amennyiben bármelyik tulajdonság hiányozna, úgy rendre a következő alapértelmezett értékeket vegyék fel:
  - `firstName`: John
  - `lastName`: Doe
  - `age`: 33
- A függvény visszaadja az adott illető adatait az adott formátumban: 
  *My name is firstName lastName. I'm age years old.*  
- A `firstName`, `lastName` és `age` helyére a paraméterként kapott objektumtulajdonságok értékét kell behelyettesíteni!


## 4. feladat
Írj egy olyan függvénykifejezést `sumNetPrices` néven, amely paraméterként vár egy egész számokat tartalmazó tömböt!   
A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig térjen vissza az elemek összegével!

## 5. feladat
Írj egy olyan függvénykifejezést `templateFactory` néven, amely paraméterként egy string-eket tartalmazó tömböt kap, és visszaad 
egy HTML-template-et (string)!
A HTML-template egy felsorolt lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.  
Pl.:

```JavaScript
// ha ez a tömb
const content = ['első', 'második', 'harmadik'];

// akkor ez legyen a visszatérési érték:
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
```
