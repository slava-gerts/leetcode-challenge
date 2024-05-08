export function maxSubarraySumCircular(A) {
  let maxSum = A[0];
  let minSum = A[0];
  let currentMax = A[0];
  let currentMin = A[0];
  let total = A[0];

  for (let i = 1; i < A.length; i++) {
    total += A[i];
    currentMax = Math.max(A[i], currentMax + A[i]);
    maxSum = Math.max(maxSum, currentMax);
    currentMin = Math.min(A[i], currentMin + A[i]);
    minSum = Math.min(minSum, currentMin);
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}
