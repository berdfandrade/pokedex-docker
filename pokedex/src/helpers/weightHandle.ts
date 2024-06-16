
/*

    Função para lidar com o peso do pokémon

*/

export default function weightHandle(number: number): string {
    const weight: string = `${Math.floor(number / 10)}.${number % 10}kg`;
    return weight;
}
