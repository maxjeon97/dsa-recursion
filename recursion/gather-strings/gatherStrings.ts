/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let strings: string[] = [];

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings.push(...gatherStrings(obj[key]));

    }
  }
  return strings;
}

export { gatherStrings };
