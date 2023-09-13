import { randomUUID } from "crypto";
import { ModificarNota, TipoNota } from "./objetos";
import { criarNota } from "./main";

const cpfTeste2 = '41226308511'
const IE = '5845861641561'

const receitaAveia: ModificarNota = {
	tipoNota: TipoNota.Entrada_0,
	caminho: './xmls/receita/aveiaReceita.xml',
	saida: `./TESTE2/receita/Aveia${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	ncm: ['10041000'],
	valor: [Math.floor(Math.random() * 100000).toString()],
}

const couveTrigoReceita: ModificarNota = {
	tipoNota: TipoNota.Entrada_0,
	caminho: './xmls/receita/couveTrigoReceita.xml',
	saida: `./TESTE2/receita/couveTrigoReceita${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	ncm: ['07042000', '10081010'],
	valor: ['0', Math.floor(Math.random() * 100000).toString()],
}

const milhoCompra: ModificarNota = {
	tipoNota: TipoNota.Saida_1,
	caminho: './xmls/despesa/milhocompra.xml',
	saida: `./TESTE2/despesa/milho${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	ncm: ['10051000'],
	valor: [Math.floor(Math.random() * 100000).toString()],
}

const milhoSojaCompra: ModificarNota = {
	tipoNota: TipoNota.Saida_1,
	caminho: './xmls/despesa/milhoSojaCompra.xml',
	saida: `./TESTE2/despesa/milhoSojaCompra${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	ncm: ['10051000', '12081000'],
	valor: ['0', Math.floor(Math.random() * 100000).toString()],
}

const geradorIgnorar: ModificarNota = {
	caminho: './xmls/ignorar/geradorIgnorar.xml',
	saida: `./TESTE2/ignorar/geradorIgnorar${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	cfop: ['5915'],
	ncm: ['85013120',],
	valor: [Math.floor(Math.random() * 100000).toString()],
}
const bonbonaIgnorar: ModificarNota = {
	caminho: './xmls/ignorar/bonbonaIgnorar.xml',
	saida: `./TESTE2/ignorar/bonbonaIgnorar${randomUUID()}.xml`,
	cpf: cpfTeste2,
	data: new Date(),
	ie: IE,
	cfop: ['5949'],
	ncm: ['84131100',],
	valor: [Math.floor(Math.random() * 100000).toString()],
}

criarNota(receitaAveia)
criarNota(couveTrigoReceita)
criarNota(milhoCompra)
criarNota(milhoSojaCompra)
criarNota(geradorIgnorar)
criarNota(bonbonaIgnorar)
