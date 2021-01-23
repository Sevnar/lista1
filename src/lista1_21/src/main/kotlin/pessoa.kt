
open class pessoa (val nome:String, val altura:Int) {

    var anoNasc: Int = 0
    var idade: Int = 0


    override fun toString(): String {
        return "$nome ($anoNasc, $altura)"
    }

    constructor(nome: String, anoNasc: Int, altura: Int): this(nome, altura){

        this.anoNasc = anoNasc
        idade = calculaIdade(anoNasc)

    }

    private fun calculaIdade(anoNasc: Int = 0): Int{
        return 2021 - anoNasc
    }


}

fun main(){

    var p1:pessoa = pessoa("Davi", 1998, 180)

    print(p1)

}