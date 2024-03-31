const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateRandomSignal = () => {
  const signalType = Math.random() < 0.5 ? "BUY" : "SELL";
  const price = getRandomNumber(50, 200);
  const volume = getRandomNumber(100, 1000);

  return {
    type: signalType,
    price: price.toFixed(2),
    volume: volume.toFixed(2),
  };
};

export const generateRandomSignals = (count) => {
  const signals = [];
  for (let i = 0; i < count; i += 1) {
    const signal = generateRandomSignal();
    signals.push(signal);
  }
  return signals;
};
