import { randomUUID } from 'crypto'
import { criarNota } from './src/main'
import { NotaExemplo, TipoNota } from './src/objetos'


const start = async () => {
	//await criarNota(NotaExemplo)
	await criarNota({
		caminho: 'xmls/main.xml',
		saida: `/${randomUUID()}.xml`,
		cfop: ['1101'],
		ncm: ['25020000', '86011000'],
		data: new Date(),
		numeroDocumento: 8888,
		valor: ['65000', '95000'],
		tipoNota: TipoNota.Entrada_0,
	})
}

start()

const uuid: string = "b3a07294-b3fa-4012-98c3-8d3c366a0ed6";
const digitsOnly: string = uuid.replace(/\D/g, '');
console.log(digitsOnly); // "3072943129833660"