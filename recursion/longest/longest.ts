import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if (words === null) {
    return 0;
  }

  return Math.max(words.val.length, longest(words.next));
}



export { longest };
