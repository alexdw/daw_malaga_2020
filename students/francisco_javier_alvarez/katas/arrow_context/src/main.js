/**
 * Resuelve el ámbito del método startNoise con arrow functions
 */

export const init = () => {

    class Animal{
        constructor(name,sound){
            this.name = name;
            this.sound = sound
        }

        makeNoise() {
            return this.sound;
        }

        startNoise() {
        
            return new Promise((resolve) => {
                resolve(this.makeNoise());
            });

        }

    }
    
    let cat = new Animal("Kitty", "meaaaaaw");
    let sound = cat.startNoise();

    return sound;
}