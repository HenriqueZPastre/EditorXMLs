import fs from 'fs'
import { xml2json, json2xml } from 'xml-js'
import { Det, XMLType } from './types'
import { ModificarNota, NotaExemplo } from './objetos'
import { randomUUID } from 'crypto'


export const criarNota = async (dados: ModificarNota) => {

	dados.cfop === undefined ? dados.cfop = [] : null
	dados.ncm === undefined ? dados.ncm = [] : null
	dados.valor === undefined ? dados.valor = [] : null

	const xmlInicial = await fs.promises.readFile(dados.caminho, 'utf-8')

	const xmlParaJson = await xml2json(xmlInicial, { compact: true, })
	let xml: XMLType = JSON.parse(xmlParaJson)

	if (dados.data) {
		xml.nfeProc.NFe.infNFe.ide.dhEmi._text = dados.data.toISOString()
	}

	if (dados.numeroDocumento) {
		xml.nfeProc.NFe.infNFe.ide.nNF._text = dados.numeroDocumento.toString()
	}

	if (dados.tipoNota != undefined) {
		xml.nfeProc.NFe.infNFe.ide.tpNF._text = dados.tipoNota.toString()
	}

	const produtos: Det = xml.nfeProc.NFe.infNFe.det

	if (Array.isArray(produtos)) {
		if (produtos.length > 1) {
			produtos.forEach((info, ind) => {
				if (dados.ncm!.length > 0 && dados.ncm![ind] != undefined) { info.prod.NCM._text = dados.ncm![ind] }
				if (dados.cfop!.length > 0 && dados.cfop![ind] != undefined) { info.prod.CFOP._text = dados.cfop![ind] }
				if (dados.valor!.length > 0 && dados.valor![ind] != undefined) {
					info.prod.vProd._text = dados.valor![ind]
					xml.nfeProc.NFe.infNFe.total.ICMSTot.vNF._text = dados.valor![(dados.valor!.length) - 1]
				}
			})
		} else {
			if (dados.ncm!.length > 0) { produtos[0].prod.NCM._text = dados.ncm![0] }
			if (dados.cfop!.length > 0) { produtos[0].prod.CFOP._text = dados.cfop![0] }
			if (dados.valor!.length > 0) {
				produtos[0].prod.vProd._text = dados.valor![0]
				xml.nfeProc.NFe.infNFe.total.ICMSTot.vNF._text = dados.valor![(dados.valor!.length) - 1]
			}
		}
	} else {
		if (dados.ncm!.length > 0) { produtos.prod.NCM._text = dados.ncm![0] }
		if (dados.cfop!.length > 0) { produtos.prod.CFOP._text = dados.cfop![0] }
		if (dados.valor!.length > 0) {
			produtos.prod.vProd._text = dados.valor![0]
			xml.nfeProc.NFe.infNFe.total.ICMSTot.vNF._text = dados.valor![(dados.valor!.length) - 1]
		}

	}

	const newXML = json2xml(JSON.stringify(xml), {
		compact: true
	})

	fs.writeFile(`./dist/${dados.saida}`, newXML, (err) => {
		if (err) console.log(err);

	});


	const sobreescrever = await fs.promises.readFile(dados.caminho, 'utf-8')
	const convertOriginal = xml2json(sobreescrever, { compact: true, })
	let original: XMLType = JSON.parse(convertOriginal)
	const uuid: string = randomUUID()
	const somenteNumeros: string = uuid.replace(/\D/g, '');
	console.log('Nova chave', somenteNumeros)
	original.nfeProc.protNFe.infProt.chNFe._text = somenteNumeros

	const final = json2xml(JSON.stringify(original), {
		compact: true
	})

	fs.writeFile(dados.caminho, final, (err) => {
		if (err) console.log(err);
	});

	console.log("saida", dados.saida)
	console.log("************************************")
}


