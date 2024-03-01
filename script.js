function checkCharactersAndWords() {
    let input = document.querySelector("#input").value.trim();

    /* replace(/\s+/g, '') ka matlab hai ke hum har whitespace character ko string se hata rahe hain. Yeh / / ke darmiyan wale jo bhi whitespace characters hain unhe replace kar diya jata hai.

    Yahan \s ka matlab hai whitespace character ko represent karta hai. + quantifier hai jo ke ek ya zyada whitespace characters ko represent karta hai. /g flag global search ko represent karta hai, jo ke string mein sabhi matches ko dhundne ke liye hota hai, nahi to sirf pehla match return hota hai.

    
    replace(/\s+/g, '') mein '' isliye likha gaya hai kyunki hum whitespace characters ko replace kar rahe hain, lekin hum unhe kuch nahi replace kar rahe hain. '' ka matlab hai ke koi bhi character replace nahi kiya jayega, jisse whitespace characters sirf hata diye jayenge lekin kuch bhi unki jagah nahi aayega.

    Iska matlab hai ke hum replace function ke zariye har whitespace character ko khatam kar rahe hain, aur sirf characters ko bacha rahe hain, jisse ke humein character count sahi mile.*/

    let charCount = input.replace(/\s+/g, '').length;


    /* /\s+/ ek regular expression hai jo whitespace characters ko match karta hai. Yahan, \s whitespace characters ko represent karta hai (jaise space, tab, newline, etc.), aur + ek quantifier hai jo ek ya zyada whitespace characters ke sequence ko match karta hai. Iska matlab hai ki / \ s + / ek ya zyada whitespace characters ke sequence ko ek hi whitespace character ke roop mein count karta hai.

    Jab hum is regular expression ko split() function ke sath istemal karte hain, to wo string ko whitespace characters ke basis par split karta hai, lekin consecutive whitespace characters ko ek hi whitespace character ke roop mein consider karta hai. Is tarah, hum whitespace characters ko effectively remove kar sakte hain aur string ko words mein split kar sakte hain. */
    
    let wordsCount = input.split(/\s+/).filter(Boolean).length;

    let words = document.querySelector("#words");
    let character = document.querySelector("#character");

    words.textContent = "Words" + " " + wordsCount;
    character.textContent = "Character" + " " + charCount;

}

document.querySelector("input").addEventListener("input", checkCharactersAndWords)


