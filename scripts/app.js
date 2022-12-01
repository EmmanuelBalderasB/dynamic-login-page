const getInput = document.getElementsByTagName('input');
const body = document.querySelector('body');

const colors = '../resources/images/colors.jpg';
const wall = '../resources/images/wall.jpg';
const white = '../resources/images/white.jpg'
const medium = '../resources/images/medium.jpg';

let inputIds = [];

for (const input of getInput) {
    inputIds.push(input.id);
};

const images = [wall, white, colors, medium];

const imageLoop = () => {
    for (let i = 0; i < images.length; i++) {
        switch (i) {
            case 0:
                setTimeout(() => {
                    body.style.backgroundImage = `url('${images[i]}')`;
                }, 9000)
                break;
            case 1:
                setTimeout(() => {
                    body.style.backgroundImage = `url('${images[i]}')`;
                }, 18000)
                break;
            case 2:
                setTimeout(() => {
                    body.style.backgroundImage = `url('${images[i]}')`;
                }, 27000)
                break;
            case 3:
                setTimeout(() => {
                    body.style.backgroundImage = `url('${images[i]}')`;
                }, 36000)
                break;
            default:
                setTimeout(() => {
                    console.log('Done');
                }, 48000)
                break;
        }

    }
}

for (let i = 0; i < 10; i++) {
    imageLoop();
}

//console.log(inputIds);