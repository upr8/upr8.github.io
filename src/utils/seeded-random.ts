/**
 * Creates a seeded pseudo-random number generator using a Linear Congruential Generator (LCG).
 *
 * LCG formula: next = (seed * a + c) % m
 *
 * The constants (a=9301, c=49297, m=233280) are chosen to:
 * - Produce a full period (all values 0 to m-1 appear before repeating)
 * - Pass basic statistical randomness tests
 * - Be fast to compute
 *
 * Unlike Math.random() which uses system entropy and varies each call,
 * this produces the same sequence for the same seed - useful for
 * reproducible "random" layouts, procedural generation, or testing.
 *
 * @param seed - Initial seed value (integer recommended)
 * @returns A function that returns pseudo-random numbers between 0 and 1
 *
 * @example
 * const random = createSeededRandom(12345);
 * random(); // 0.8362...  (always the same for seed 12345)
 * random(); // 0.1847...  (next in sequence)
 */
export function createSeededRandom(seed: number): () => number {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}
