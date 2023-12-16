from flask import Flask, render_template, request, redirect, url_for, flash
import repositorio

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta_aqui'

@app.route("/")
def retorna_inicio():
    return render_template('index.html')

@app.route("/login")
def retorna_login():
    return render_template('login.html')

@app.route("/cadastro", methods=["POST", "GET"])
def retorna_cadastro():
    if request.method == 'POST':
        personagem = {}
        personagem['nome'] = request.form["nome"]     
        personagem['email'] = request.form["email"]      
        personagem['senha'] = request.form["senha"]

        if len(personagem["nome"]) < 4:
            flash("O nome deve ter pelo menos 4 caracteres")
        elif len(personagem["senha"]) < 8:
            flash("A senha deve ter pelo menos 8 caracteres")
        else:
            repositorio.criar_usuarios(**personagem) 
            flash("Cadastro realizado com sucesso!")  
            return redirect(url_for('login'))
    
    return render_template('cadastro.html')
 

@app.route("/jogo")
def retorna_jogo():
    return render_template("jogo.html")

@app.route("/mesaMestre")
def retorna_mesa():
    return render_template("mesa_mestre.html")

@app.route("/fichaBruxo")
def retorna_fichaBruxo():
    return render_template("criacao_bruxo.html")

@app.route("/sobre")
def retorna_sobre():
    return render_template("sobre_rpg.html")

app.run(debug=True)