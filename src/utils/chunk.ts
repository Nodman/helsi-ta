export const chunk = <V extends unknown>(
  array: V[],
  chunkSizes: number[]
): V[][] => {
  const { chunks } = chunkSizes.reduce(
    (acc, item) => {
      const startIndex = acc.lastIndex;
      const endIndex = acc.lastIndex + item;

      acc.chunks.push(array.slice(startIndex, endIndex));
      acc.lastIndex = endIndex;

      return acc;
    },
    { lastIndex: 0, chunks: [] } as { lastIndex: number; chunks: V[][] }
  );

  return chunks.filter((item) => item.length);
};
