class Funcionario(nome:String, altura:Int , val salario: Double): pessoa(nome, altura) {



    override fun toString(): String {
        return super.toString() + "$salario"
    }
}

fun main(){
    var f1:Funcionario = Funcionario("Davi", 185, 1079.95)

    print(f1)
}