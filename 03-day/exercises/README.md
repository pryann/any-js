### Basic

- Írj egy függvényt `getTheSmallestElement` néven, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb legkisebb elemét! 
- Írj egy függvényt `getTheLargestElement` néven, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb legnagyobb elemét!
- Írj egy függvényt `getCountOfTheEvenElements` néven, amely visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb páros elemeinek a számát!
- Írj két függvényt `getSumOfTheElements` és `getAverageOfTheElements` néven.  
  A `getSumOfTheElements` visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb összegét!  
  A `getAverageOfTheElements` visszaadja a paraméterként kapott csak egész számokat tartalmazó tömb átlagát! Használd fel a `getSumOfTheElements` függvényt!

1. Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
Mentsd el külön lastName, firstName, és job változókba a fenti objektum property-jeit!   
Ha valamelyik nincs megadva, akkor az érték legyen a "unknown" string!

2. Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
Ments el külön `l`, `f`, és `j` változókba a fenti objektum lastName, firstName, és job property-jeit! 
Ha valamelyik nincs megadva, akkor az érték legyen a "unknown" string!

3. Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak: (saját objectum 3 metódussal, Intl objectet használd ahol kell)
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
