export const id = (length: number = 5) => {
  let str = ""
  let chars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890-qwertyuiopasdfghjklzxcvbnm"
  for(let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str;
}