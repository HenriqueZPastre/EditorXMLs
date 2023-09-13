import { UUID, randomUUID } from "crypto"
export type ModificarNota = {
	cpf?: string,
	ie?: string,
	caminho: string,
	saida: string,
	ncm?: string[]
	cfop?: string[]
	valor?: string[]
	data?: Date,
	numeroDocumento?: number,
	//0 = Entrada, 1 = Saida 
	tipoNota?: TipoNota
}

export enum TipoNota {
	Entrada_0 = 0,
	Saida_1 = 1
}



export const NotaExemplo: ModificarNota = {
	caminho: 'xmls/main.xml',
	saida: `/${randomUUID()}.xml`,
	cfop: ['1101'],
	ncm: ['25020000', '86011000'],
	data: new Date(),
	numeroDocumento: 8888,
	valor: ['65000', '95000'],
	tipoNota: TipoNota.Entrada_0,
}

