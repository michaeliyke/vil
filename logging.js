function l(...args) {
  const b = "\n ";
  for (const arg of args) console.log(b, arg);
}

module.exports = {
  l, ...console, L: l, LOG: l, log: l, console,
};
