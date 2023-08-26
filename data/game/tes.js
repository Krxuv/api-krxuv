(async () => {
  let fs = require('fs');
  let database = JSON.parse(fs.readFileSync('./family100.json'));
  let text = `Baang percetakan?
1. _________
2. _________
3. _________
4. _________
5. _________`;
  let newtext = text.split('\n');
  let rilltext = newtext[0];
  let regque = rilltext.replace(/\?/g, '');
  for (let i = 0; i < database.length; i++) {
    if (database[i].soal.toLowerCase() === regque.toLowerCase()) {
      console.log(database[i]);
      for (let a = 0; a < database[i].jawaban.length; a++) {
        await delayPrint(console.log(database[i].jawaban[a]), 1000);
      }
      await delayPrint(console.log('/nyerah'), 1000);
      await delayPrint(console.log('/mulai'), 1000);
      break;
    }
  }

  async function delayPrint(text, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
})();
