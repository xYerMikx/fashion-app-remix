export const sleep = (delay: number) =>
  new Promise((res) => setTimeout(res, delay))
