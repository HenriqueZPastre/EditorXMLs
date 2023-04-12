import { criarNota } from './src/main'
import { NotaExemplo } from './src/objetos'


const start = async () => {
	await criarNota(NotaExemplo)
}

start()