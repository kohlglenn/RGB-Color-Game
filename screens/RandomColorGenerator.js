/* Returns a random hex color in format #ff00ff*/
export default function generateRandomColor() {
    let rand = Math.floor(Math.random()*16777215).toString(16);
    let length = rand.length;
    while (length < 6) {
        rand = "0"+rand;
        length = rand.length;
    }
    return "#"+rand;
  }