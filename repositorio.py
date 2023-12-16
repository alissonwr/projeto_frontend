import sqlite3

#Cria um novo usuário no banco de dados
def criar_usuarios(nome, email, senha):
    try:
        conn = sqlite3.connect("harry_potter.db")
        cursor = conn.cursor()
        sql_insert = "INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario) values (?, ?, ?)"
        cursor.execute(sql_insert, (nome, email, senha))
        conn.commit()
        conn.close()
    except Exception as ex:
        print(ex)
