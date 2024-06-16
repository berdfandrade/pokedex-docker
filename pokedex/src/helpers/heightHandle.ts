
/*

    Função para lidar com a altura do pokémon

*/

export default function heightHandle(number: number): string {
    const meters: number = Math.floor(number / 10); // parte inteira dos metros
    const centimeters: number = number % 10; // centímetros restantes
    const height: string = `${meters}.${centimeters}m`;
    return height;
}