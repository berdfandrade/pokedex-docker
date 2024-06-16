// Não preciso disso, pois a chakra-ui tem um "capitalize"
export default function capitalize(input: string): string {
    if (input.length === 0) {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
