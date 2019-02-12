var EtenResultaat = 1;
var AmusementResultaat = 1;
var HotelResultaat = 3;

var etenIframe = document.getElementById('Eten');
var hotelIframe = document.getElementById('Hotel');
var amusementIframe = document.getElementById('Amusement');

var eten1_1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207434.14255746192!2d139.5703028189388!3d35.67309961996317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ec63789e70fa29b!2sT&#39;s+TanTan!5e0!3m2!1snl!2snl!4v1549977332665";
var eten1_2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4962409807617!2d139.79392856525965!3d35.71401238018668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec13fdfb9eb%3A0x94e9b5e5f8176ced!2zS2lra8WN!5e0!3m2!1snl!2snl!4v1549977208469";
var eten1_3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55542.797826592665!2d139.72999106474543!3d35.66973497623104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ba0b0a00faf0fee!2sShabusen!5e0!3m2!1snl!2snl!4v1549977112271";
var eten1_4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207434.14255746192!2d139.5703028189388!3d35.67309961996317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63cca3537efb5e30!2sMagellan&#39;s!5e0!3m2!1snl!2snl!4v1549978708196";

var hotel1_1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207434.14357277614!2d139.56927545573663!3d35.67309922930019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018927b6c973f1b%3A0xc67e9e0d0181cde9!2sHop+Step+Inn!5e0!3m2!1snl!2snl!4v1549978773519";
var hotel1_2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207434.14357277614!2d139.56927545573663!3d35.67309922930019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2a7962f1ec6f955!2sSakura+Hotel+Ikebukuro!5e0!3m2!1snl!2snl!4v1549978792203";
var hotel1_3 = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d207434.14364892588!2d139.5692755!3d35.6730992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1f10dc704752f05!2sSakura+Hotel+Jimbocho!5e0!3m2!1snl!2snl!4v1549978856680";
var hotel1_4 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207434.14357277614!2d139.56927545573663!3d35.67309922930019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ead409d4b37%3A0xc28d16f1c227ce75!2sHotel+LiVEMAX+Tokyo+Bakuroch%C5%8D!5e0!3m2!1snl!2snl!4v1549978869015";

var amusement1_1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3001916064272!2d139.77433281524156!3d35.71883508018561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e8314d77d11%3A0x232fd618bd4977dd!2sTokyo+National+Museum!5e0!3m2!1snl!2snl!4v1549978061980";
var amusement1_2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.3193361929368!2d139.7540704081712!3d35.685897995048315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c13425af13d%3A0xa31b000a35db03f9!2sThe+East+Gardens+of+the+Imperial+Palace!5e0!3m2!1snl!2snl!4v1549978109673";
var amusement1_3 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.442445239232!2d139.77179311524168!3d35.71533578018624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9b45906ac3%3A0xb1cb3623124e645a!2sUeno+Onshi+Park!5e0!3m2!1snl!2snl!4v1549978143656";
var amusement1_4 = "bla";

function Main() {
  console.log("Eten: " + EtenResultaat);
  console.log("Amusement: " + AmusementResultaat);
  console.log("Hotel: " + HotelResultaat);

  ChangeEtenSrc(EtenResultaat);
  ChangeHotelSrc(HotelResultaat);
  ChangeAmusementSrc(AmusementResultaat);
}

function ChangeEtenSrc(Value) {
  if (Value == "1") {
    etenIframe.src = eten1_1;
  }  if (Value == "2") {
    etenIframe.src = eten1_2;
  }  if (Value == "3") {
    etenIframe.src = eten1_3;
  }  if (Value == "4") {
    etenIframe.src = eten1_4;
  }
}

function ChangeHotelSrc(Value) {
  if (Value == "1") {
  hotelIframe.src = hotel1_1;
}  if (Value == "2") {
  hotelIframe.src = hotel1_2;
}  if (Value == "3") {
  hotelIframe.src = hotel1_3;
}  if (Value == "4") {
  hotelIframe.src = hotel1_4;
}
}

function ChangeAmusementSrc(Value) {
   if (Value == "1") {
  amusementIframe.src = amusement1_1;
}  if (Value == "2") {
  amusementIframe.src = amusement1_2;
}  if (Value == "3") {
  amusementIframe.src = amusement1_3;
}  if (Value == "4") {
  amusementIframe.src = amusement1_4;
}
}
