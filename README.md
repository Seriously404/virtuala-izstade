# Spēļu pietura – videospēļu vēsture

Virtuāla izstāde par videospēļu un konsoļu attīstību no 1972. līdz 2017. gadam.
Prakses grupas darbs, izmantojot HTML5, CSS3 un JavaScript.

Repozitorijs: https://github.com/Seriously404/virtuala-izstade

## Faili un palaišana

Atver `index.html` pārlūkprogrammā. Nav jāinstalē nekādas bibliotēkas.
Attēli ir saglabāti mapē `images`, tāpēc tie ielādējas arī bez interneta.

- `index.html` – lapas saturs, navigācija, 8 galerijas kartītes un 5 karuseļa slaidi.
- `css/style.css` – paredzēts lapas noformējumam.
- `js/script.js` – paredzēts karuseļa darbībai.
- `images/` – izstādes attēli. Autori un licences ir norādīti lapas avotu sadaļā.

Pašlaik ir sagatavota HTML daļa. CSS un JavaScript faili vēl ir tukši,
tāpēc lapa pagaidām izmanto pārlūka pamata noformējumu un karuseļa pogas vēl nedarbojas.

## Pienākumu sadalījums

Pirms iesniegšanas ierakstām visu dalībnieku vārdus un reāli paveikto:

- HTML struktūra un navigācija: ____________________
- CSS noformējums un responsīvais izkārtojums: ____________________
- JavaScript karuselis un attēlu kolekcijas pārskatīšana: ____________________

“Spēļu pietura” ir piedāvātais komandas un izstādes nosaukums. To varam nomainīt;
komandas vārdus var ierakstīt arī lapas kājenē.

## CSS daļai

Galvenās sadaļas ir `.header`, `.hero`, `.about`, `.gallery`, `.carousel-section`,
`.sources` un `.footer`. Atkārtotais `.container` palīdz veidot vienādu satura platumu.

- Galveni un ievadu var izvietot ar Flexbox.
- `.gallery-grid` var veidot ar CSS Grid; katra `.gallery-item` ir viena kartīte.
- Attēliem izmanto `max-width: 100%` un `height: auto`, lai tie ietilptu arī telefonā.
- Galerijas attēli ir dažādās proporcijās. Vienāda augstuma attēlu laukumam var
  izmantot `height: 220px; object-fit: contain;`, lai konsoles netiktu apgrieztas.
- `.button` ir saite uz galeriju, kuru var noformēt kā pogu.
- Karuselī jāpaliek redzamam tikai vienam slaidam. Ja slaidiem maina `display`,
  pievieno arī `[hidden] { display: none; }`, lai slēptie slaidi neparādītos.

Ieteikums izskatam: gaišs fons, tumšs teksts, viena akcenta krāsa un vienādas
atstarpes starp kartītēm. Telefonā kartītes vienā kolonnā, datorā – vairākās.

## JavaScript daļai

HTML jau pieslēdz `js/script.js` ar `defer`, tāpēc elementus var atlasīt uzreiz.

| Elements | Atlasītājs |
| --- | --- |
| Visi pieci slaidi | `.carousel-slide` |
| Iepriekšējā attēla poga | `#previous-slide` |
| Nākamā attēla poga | `#next-slide` |
| Automātiskās maiņas poga | `#toggle-autoplay` |
| Attēla numurs | `#slide-counter` |

Pirmais slaids ir redzams, pārējiem ir `hidden` atribūts. JavaScript pusē izvēlētajam
slaidam iestata `hidden = false`, pārējiem – `hidden = true`. Atjauno arī skaitītāju,
piemēram, `2 / 5`. Pēc piektā slaida jāparāda pirmais, bet pirms pirmā – piektais.

Jāpievieno pogu `click` notikumi, automātiska maiņa ar `setInterval` un apturēšana
ar `clearInterval`. Automātiskajai maiņai var izvēlēties 5 sekunžu intervālu.
HTML sākumā šī funkcija ir izslēgta (`aria-pressed="false"`). Ja JavaScript to ieslēdz
uzreiz pēc lapas ielādes, jāatjauno arī pogas stāvoklis un teksts. Pogai jāļauj
maiņu gan apturēt, gan atsākt, neveidojot vairākus taimerus reizē.

## Pirms iesniegšanas

- Pabeigt CSS un JavaScript daļas un pārbaudīt tās kopā.
- Pārbaudīt navigāciju, abas karuseļa virzienu pogas, automātisko maiņu un pauzi.
- Pārbaudīt lapu telefonā un datorā.
- Aizpildīt dalībnieku vārdus un katra ieguldījumu.
- Pārbaudīt HTML un CSS ar pasniedzējas norādītajiem validatoriem.
- Saglabāt katra dalībnieka izmaiņas GitHub un sagatavot ZIP ar visiem projekta failiem.
