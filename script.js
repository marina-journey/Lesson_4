let randomNumber = Math.floor(Math.random() * 10);
let guess = prompt('Я загадал число от 1 до 10! Попробуй отгадай. Какое число я загадал?');
let numberOfGuess = 1;

console.log(randomNumber);
confirm('Хотите продолжить?')


while (true) {
    if (guess < randomNumber) {
        guess = prompt('Мало. Попробуй еще раз!');
        numberOfGuess = numberOfGuess + 1;  
    } else if (guess > randomNumber) {
        guess = prompt('Много. Попробуй еще раз!');
        numberOfGuess = numberOfGuess + 1;
    } else {
        alert('Ты угадал! Поздравляю! Это число '+ randomNumber +'. Тебе понадобилось '+ numberOfGuess +' попыток.');
        break;
    }  
 }  
