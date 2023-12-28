//----- 1-masala.
// 1. Satrni kiritish sifatida qabul qiladigan va shu satrning teskari versiyasini qaytaradigan  funksiya yozing.

// function reverse(satr) {
//     let reverseString = ""; 
    
//     for (let i = satr.length - 1; i >= 0; i--) {
//         reverseString += satr[i];
//     }
    
//     return reverseString ; 
//    }
   
//    console.log(reverse("salom")); 


//----- 2-masala.
// 2. Satrni kiritish sifatida qabul qiluvchi va qatordagi unlilar sonini (a, e, i o, u) qaytaruvchi funksiya yozing.

// function vowel(satr) {
//     let counter = 0; 
    
//     for (let i = 0; i < satr.length; i++) {
//     let array = satr[i].toLowerCase();
    
//     if (array == 'a' || array == 'e' || array == 'i' || array == 'o' || array == 'u') {
//     counter++;
//     }
//     }
    
//     return counter; 
//    }
   
//    console.log(vowel("salom"));

 //----- 3-masala.
// 3. Berilagan satr palindrom yoki yo'qligi tekshiradiagn funksiyani yozing. 

// function palindromTekshirish(matn) {
//    var matnTers = matn.split('').reverse().join('');
   
//    if (matn == matnTers) {
//    return true;
//    } else {
//    return false;
//    }
//   }
  
//   var matn1 = "kayak";
//   var matn2 = "salom";
//   console.log(matn1 + " palindrom: " + palindromTekshirish(matn1));
//   console.log(matn2 + " palindrom: " + palindromTekshirish(matn2));
  
//----- 4-masala.
// 4. Gapni (satrni) kiritish sifatida qabul qiladigan va shu gapdagi eng uzun so'zni qaytaradigan funksiya yozing. 

// function engUzunSoz(gap) {
//    let  sozlar = gap.split(" ");
//    let  engUzun = 0;
//    let engUzunSoz = "";
//    for (let i = 0; i < sozlar.length; i++) {
//    let uzunlik = sozlar[i].length;
//    if (uzunlik > engUzun) {
//    engUzun = uzunlik;
//    engUzunSoz = sozlar[i];
//    }
//    }
//    return engUzunSoz;
//   }


//   let gap = "Salom dunyo! Bugun ish kuni.";
//   let uzunSoz = engUzunSoz(gap);
//   console.log(uzunSoz); 

//----- 5-masala.
// 5.  Gapni (satrni) kiritish sifatida qabul qiladigan va har bir so'zning birinchi harfi bosh harf bilan yangi gapni qaytaradigan funksiya yozing.

// function capitalLetter(sentence) {
//    let words = sentence.split(" ");
//    let res = [];
  
//    for (let i = 0; i < words.length; i++) {
//    let firstLetter = words[i].charAt(0).toUpperCase();
//    let newWords = firstLetter + words[i].slice(1);
   
//    res.push(newWords);
//    }
//    return res.join(" ");
//   }

//   let arr = "salom dunyo";
//   console.log(capitalLetter(arr)); 

//----- 6-masala.
// 6. Takrorlangan belgilar sonidan foydalanib, asosiy satr siqishni bajaradigan funksiyani yozing.   

// function compression(sentence) {
//    let resault = "";
//    let characters = sentence.split("");
//    let character = characters[0];
//    let sum = 1;
  
//    for (let i = 1; i <= characters.length; i++) {
//    if (characters[i] === character ) {
//    sum++;
//    } else {
//    resault += character + sum;
//    character = characters[i];
//    sum = 1;
//    }
//    }
  
//    return resault;
//   }
  
//   let sentence = "aabcccccaaa";
//   let compressed = compression(sentence);
//   console.log(compressed); 
  
  


  
   
   