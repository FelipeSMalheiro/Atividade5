/*Crie uma classe chamada Estudante, essa classe
deve conter os atributos:
nome, e-mail, RA, curso e uma lista com o nome 
das disciplinas que o estudante
está matriculado. A classe também deve ter dois
métodos: primeiraDisciplina
e ultimaDisciplina que vão devolver respectivamente
a primeira disciplina
que o estudante está matriculado e a última.
Para testar, crie dois
estudantes de exemplo e imprima os valores na tela.*/

    class Estudante {
        constructor(nome, email, ra, curso, disciplinas) {
            this.nome = nome
            this.email = email
            this.ra = ra
            this.curso = curso
            this.disciplinas = disciplinas
        }
        aluno(){
            console.log(`\n${this.nome}\n${this.email}\n${this.ra}\n${this.curso}\n${this.disciplinas}`)

        }
        primeiraDisciplina(){
             console.log(`primeira disciplina: ${this.disciplinas[0]}`)
        }

        ultimaDisciplina(){
            console.log(`ultima disciplina: ${this.disciplinas[this.disciplinas.length-1]}\n\n`)
        }
    }

    const estudante1 = new Estudante("aluno 1","aluno1@mail.com",123456,"ADS",["D1","D2","D3"])
    const estudante2 = new Estudante("aluno 2","aluno2@mail.com",222222,"Redes",["B1","B2","B3"])

    estudante1.aluno()
    estudante1.primeiraDisciplina()
    estudante1.ultimaDisciplina()

    estudante2.aluno()
    estudante2.primeiraDisciplina()
    estudante2.ultimaDisciplina()
