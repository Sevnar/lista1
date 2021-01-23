package com.example.lista1

class pessoa (nome:String, altura:Float){
    var nome:String? = null
    var dataNasc:String? = null
    var idade:Int? = null
    var altura:Float? = null

    override fun toString(): String {
        return "$nome($dataNasc, $altura)"
    }

    fun calcularIdade()
}