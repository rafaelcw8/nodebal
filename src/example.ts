import { BalancaPadraoKilo } from "./classes/padrao";

const balanca = new BalancaPadraoKilo("COM7");

balanca
  .lerPeso(300)
  .then((peso) => {
    console.log(`Peso lido: ${peso}`);
  })
  .catch((err) => {
    console.error(err);
  });
