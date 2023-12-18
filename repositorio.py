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

def retornar_usuarios():
    try:
        resultado = []
        conn = sqlite3.connect("harry_potter.db")
        cursor = conn.cursor()
        sql_select = "SELECT * FROM usuarios"
        cursor.execute(sql_select)
        usuarios = cursor.fetchall()
        conn.close()
        for item in usuarios:
            usuario = {
                'id': item[0],
                'nome': item[1],
                'email': item[2],
                'senha': item[3]
            }
            resultado.append(usuario)
        return resultado
    except:
        return False

def retornar_usuario(id:int):
    try:
        conn = sqlite3.connect("harry_potter.db")
        cursor = conn.cursor()
        sql_select = "SELECT * FROM usuarios WHERE id_usuario = ?"
        cursor.execute(sql_select, (id, )) 
        id, nome, email, senha = cursor.fetchone() 
        conn.close 
        return {"id": id,"nome": nome, "email": email, "senha": senha } 
    except:
        return False