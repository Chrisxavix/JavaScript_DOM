console.log(window);

let texto = 'Hola Maggot, eres chido xd xd'
const hablar = (hablar) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);