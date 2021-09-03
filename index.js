const argv = require('minimist')(process.argv.slice(2));
const ping = require('ping');
const CatLoggr = require('cat-loggr');
const loggr = new CatLoggr();

const host = argv.host ?? '8.8.8.8';
const fairPing = argv.ms ?? 80;
const fairPacketLoss = argv.packets ? parseFloat(argv.packets) : 0.01;
const pingInterval = argv.interval ?? 1000;

const main = async () => {
  const res = await ping.promise.probe(host);
  if (res.alive) {
    const packetLoss = parseFloat(res.packetLoss).toFixed(2);
    const message = `${res.numeric_host} is reachable | 🏓 ${res.time}ms | 📦 ${packetLoss}% lost packages`
    if (res.time <= fairPing && packetLoss <= fairPacketLoss) {
      loggr.info(message);
    } else {
      loggr.warn(message);
    }
  } else {
    loggr.error(`${res.inputHost} is unreachable`);
  }
};

setInterval(main, pingInterval);
main();
