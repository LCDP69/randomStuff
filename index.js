import chalk from 'chalk';

const classmates = ['Sihem', 'Arthur', 'Aurélien', 'Soumia'];


const colors = [chalk.blue, chalk.green, chalk.yellow, chalk.magenta];

classmates.forEach((classmate, colorIndex) => {
    const coloredName = colors[colorIndex](classmate);
    console.log(coloredName);
});