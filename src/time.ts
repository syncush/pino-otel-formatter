export function unixEpochTimeToNanosec(time: number) : string {
  return time + '0'.repeat(6);
}
