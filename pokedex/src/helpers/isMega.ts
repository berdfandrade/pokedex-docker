// Caso o polémon seja mega, lidamos com isso
export default function isMega(str: string): boolean {
  // Verifica se a string tem pelo menos 5 caracteres
  if (str.length >= 5) {
    // Obtém os últimos 5 caracteres da string
    const lastFiveChars = str.slice(-5);
    // Verifica se os últimos 5 caracteres são "-Mega" ou "-X"
    return (
      lastFiveChars === "-Mega" ||
      lastFiveChars === "-Mega" ||
      lastFiveChars === "-X" ||
      lastFiveChars === "-Y"
    );
  }
  // Caso a string seja menor que 5 caracteres, retorna falso
  return false;
}

export function removeMegaSuffix(name: string): string {
  if (name.endsWith("-Mega")) {
    return name.slice(0, -5); // Remove os últimos 5 caracteres ("-Mega")
  } else if (name.endsWith("-X")) {
    return name.slice(0, -2); // Remove os últimos 2 caracteres ("-X")
  } else {
    return name; // Retorna a string original se não terminar com "-Mega" ou "-X"
  }
}