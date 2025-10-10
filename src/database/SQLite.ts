import * as SQLite from "expo-sqlite";

// Criar e abir o banco de dados
// openDatabaseSync - Abrir o banco de dados de forma síncrona
const database = SQLite.openDatabaseSync("tarefa.db");

// Iniciar o banco de dados
// transaction - transação(Operações no banco de dados)
// executeSync - Executar comandos SQL

export const initDB = async () => {
  await database.execSync(
    "CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, descricao TEXT NOT NULL)"
  );
  () => {
    console.log("Banco de dados criado com sucesso!");
  };
  (error: any) => {
    console.log("Erro ao criar o banco de dados: ", error);
  };
};

// CRUD - Create, Read, Update, Delete

// Create - Inserir dados no banco de dados
export const insertTarefa = (titulo: string, descricao: string) => {
  database.execSync(
    `INSERT INTO tarefas (titulo, descricao) VALUES ('${titulo}', '${descricao}')`
  );
};

// Read - Ler dados do banco de dados
export const getTarefas = () => {
  const resultados = database.getAllSync(
    "SELECT id, titulo AS title, descricao AS description FROM tarefas"
  );
  return resultados;
};

// Update - Atualizar dados no banco de dados
export const updateTarefa = async (
  id: number,
  titulo: string,
  descricao: string
) => {
  await database.execSync(
    `UPDATE tarefas SET titulo = '${titulo}', descricao = '${descricao}' WHERE id = ${id}`
  );
};

// Delete - Deletar dados do banco de dados
export const deleteTarefa = async (id: number) => {
  await database.execSync(`DELETE FROM tarefas WHERE id = ${id}`);
};
