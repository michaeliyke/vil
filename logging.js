function l() {
  const b = "\n ";
  for(const arg of arguments) console.log(b, arg);
}

module.exports = {l, ...console,L: l, LOG: l, log: l, console};