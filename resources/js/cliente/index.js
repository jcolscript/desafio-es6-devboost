export default class Cliente {
  constructor({
    clienteID,
    clienteNome,
    clienteEmail,
    clienteCPF,
    contaPoupanca,
  }) {
    this.clienteID = clienteID;
    this.clienteNome = clienteNome;
    this.clienteEmail = clienteEmail;
    this.clienteCPF = clienteCPF;
    this.contaPoupanca = contaPoupanca;
  }
}
