


//const rawTxt = require('./db.js')
const rawTxt = `
SANTI-PUBLIC ENEMY (Original Mix) [Master].wav BIZOUBIZAR - 1POUK4V 155 1M.wav
02.J. Feierabend, Ramî - Ok, Captain!.aiff LOTTA PEOPLE (PHJFREE01).wav
A - Charlie - Spacer Woman (vocal).wav
Gøøve Brøthers - All Right!.wav
Acheel & Wooka - Flight For Mars_1644 RS Mastering.wav
Car Wash Anthem.wav
GIGSTA - Bad Bad Habits [Original Mix]_1644 RS Mastering.wav Mostly James - Buckle Up, Buckaroo.flac
NewTone - That's It [DDA] 16bit 44kHz MASTER.wav
The Trip - Yeah Right - DIGI MASTER 44.1-16.wav
Alex Ranerro, Mehlor - Sky (Kolter Interpretation 2).aiff
Alex Ranerro, Mehlor - Sky (Kolter Interpretation 1).aiff
Bronski Beat - Smalltown Boy (Herr Krank Acid Edit) - DIGI MASTER 44.1-16.wav
01. Strandtuch - Let's Go_MBMASTER_16441.wav
Strandtuch - Watering Services.wav
Alcazar - Cryin' At The Discoteque (Herr Krank Edit).wav
00001253_JRDN - SVENSKA [44124].wav
Get Down.wav
1-02.LAC - Welcome To The Space (Terasse Mix).flac
52 - Macé - Powerhouse.flac
Asaya - Can We Dance in Your Kitchen __.flac 05-b_from_e-cdg-man-fbce98e4.flac
01 - Common Ground.flac
1 - Maison Blanche - Put Them up in the Air.flac
DJ Debauchery - Eurasian Sensation.mp3
Luuk Van Dijk - Close Your Eyes (Original Mix).mp3 A2.FSOM - Barefoot In Sydney.mp3
Jesse Bru - In the Deep.mp3
Romeo Louisa - No Apologies [www.slider.kz].mp3
Mogan - Running Along The Sunflowers (Original Mix).mp3 Baby June - Precious (Binni Remix).mp3
M-High - The Back Made Me Do It (Original Mix).mp3
Romeo Louisa - On My Mind [HOUZ] [www.slider.kz].mp3 2- Eden Burns - Moeraki Groove.mp3
Romeo Louisa - Heartbreak [www.slider.kz].mp3
Roulade 3000 - Poule Party.mp3
Baccus, ILyes - Rave Boulevard (Original Mix).mp3
05-jennings.-bad_intelligence_(original_mix).mp3
Forge, Elijah Something - Ecstatic Madness (Original Mix) [Conspiracy].mp3
Ghetto Groove - C'mon (Original Mix).mp3
M-High - Jackstion.mp3
X-COAST - XTC V (Original Mix).mp3
M-High - The Answer (Original Mix).mp3
M-High - They Shifted Left [www.slider.kz].mp3 03-marsolo--mindflow-dh.mp3
`

const input = document.getElementById("input").value;


function parse(string){
    const arr = string.split(/\.mp3|\.wav|\.aiff|\.flac/)
    console.log(arr)
    let arrWithoutHyphen = arr.map(chaine => chaine.replace(/[-_]+/g, ' '));
    let arrWithoutLink = arrWithoutHyphen.map(chaine => chaine.replace(/\s*\[\s*www\.[^\]]*\]\s*$/g, ' '));
console.log(arrWithoutLink)
    return arrWithoutLink
};

function youtubizeParse(string){
    const arr = parse(string)
    //console.log('COUCOU',arr)
    const slskyt = document.getElementById('slskyt');

    for (let i= 0; i<arr.length-1; i++){
        //console.log('coucou',arr[arr.length-1])
        slskyt.innerHTML += `
        ${arr[i]} <a class="button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(arr[i])}" target="_blank">
        open in youtube</a><br>
        `

    }
}

youtubizeParse(rawTxt)