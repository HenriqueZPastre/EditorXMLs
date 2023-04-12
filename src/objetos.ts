export type ModificarNota = {
	caminho: string,
	saida: string,
	ncm?: string[]
	cfop?: string[]
	valor?: string[]
	data?: Date,
	numeroDocumento?: number,
	//0 = Entrada, 1 = Saida 
	tipoNota?: 0 | 1
}

export const NotaExemplo: ModificarNota = {
	caminho: 'xmls/main.xml',
	saida: '/mainReforge.xml',
	cfop: ['1101'],
	ncm: ['25020000', '86011000'],
	data: new Date(),
	numeroDocumento: 8888,
	valor: ['65000', '95000'],
	tipoNota: 0,
}
