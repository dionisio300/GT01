📌 Exemplos práticos com explicações
1. Criando uma Series a partir de uma lista

import pandas as pd

s = pd.Series([10, 20, 30])
print(s)

O pandas criou um índice numérico padrão (0, 1, 2).

2. Definindo um índice personalizado

s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s)

Agora, cada valor está associado a um rótulo personalizado.

3. Criando a partir de um dicionário

s = pd.Series({"a": 10, "b": 20, "c": 30})
print(s)
Quando usamos um dicionário, o índice será formado pelas chaves.

4. Criando a partir de um valor escalar (repetido)

s = pd.Series(5, index=["a", "b", "c"])
print(s)

Muito útil para inicializar dados com um valor padrão.

5. Usando o parâmetro dtype e name

s = pd.Series([1, 2, 3], dtype="float64", name="notas")
print(s)

Name: notas, dtype: float64
⚠️ Erros comuns
❌ Comprimento dos dados ≠ comprimento do índice

pd.Series([1, 2, 3], index=["a", "b"])
ValueError: Length of passed values is 3, index implies 2
Sempre que você passa um index, ele precisa ter o mesmo tamanho do data.





1. Criando um DataFrame a partir de um dicionário de listas
import pandas as pd

dados = {
    "nome": ["Ana", "João", "Maria"],
    "idade": [23, 35, 31],
    "nota": [8.5, 7.0, 9.2]
}

df = pd.DataFrame(dados)
print(df)

2. Definindo um índice personalizado

df = pd.DataFrame(dados, index=["a", "b", "c"])
print(df)


3. Criando a partir de uma lista de dicionários

dados = [
    {"nome": "Ana", "idade": 23},
    {"nome": "João", "idade": 35, "nota": 7.0},
    {"nome": "Maria", "nota": 9.2}
]

df = pd.DataFrame(dados)
print(df)

4. A partir de array NumPy com rótulos

import numpy as np

array = np.array([[1, 2], [3, 4]])
df = pd.DataFrame(array, columns=["coluna1", "coluna2"], index=["a", "b"])
print(df)


5. Com uma única Series (coluna)

serie = pd.Series([10, 20, 30], name="valores")
df = pd.DataFrame(serie)
print(df)


⚠️ Erros comuns
1. Índices e colunas com tamanhos inconsistentes

pd.DataFrame([[1, 2], [3, 4]], columns=["A"])

2. Dados com tipos inesperados

Vai criar um DataFrame estranho — o ideal é passar listas ou estruturas mais regulares.


Atividades sobre Series
Atividade 1
Crie uma lista com os nomes de cinco frutas e transforme essa lista em uma Series do pandas.

Resposta:

python
Copiar
Editar
import pandas as pd

frutas = ["maçã", "banana", "laranja", "uva", "melancia"]
serie_frutas = pd.Series(frutas)
print(serie_frutas)
Atividade 2
Crie uma lista com os valores de temperatura ao longo de 7 dias. Crie uma Series que use os dias da semana como índice.

Resposta:

python
Copiar
Editar
temperaturas = [22.5, 23.0, 21.5, 20.0, 19.5, 21.0, 22.0]
dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
serie_temp = pd.Series(temperaturas, index=dias)
print(serie_temp)
Atividade 3
Crie uma Series usando um dicionário onde as chaves são nomes de alunos e os valores são suas notas finais.

Resposta:

python
Copiar
Editar
notas = {"Ana": 8.5, "Bruno": 7.0, "Carlos": 9.2, "Diana": 6.8}
serie_notas = pd.Series(notas)
print(serie_notas)
Atividade 4
Crie uma Series com os números de 1 a 5 e defina índices personalizados em formato de letras.

Resposta:

python
Copiar
Editar
valores = [1, 2, 3, 4, 5]
indices = ['a', 'b', 'c', 'd', 'e']
serie_custom = pd.Series(valores, index=indices)
print(serie_custom)
Atividades sobre DataFrame
Atividade 5
Crie um dicionário com os dados de três pessoas contendo nome, idade e cidade. Use esse dicionário para criar um DataFrame.

Resposta:

python
Copiar
Editar
dados = {
    "nome": ["João", "Maria", "Pedro"],
    "idade": [28, 34, 22],
    "cidade": ["SP", "RJ", "BH"]
}

df = pd.DataFrame(dados)
print(df)
Atividade 6
Crie uma lista de dicionários representando três livros, com as chaves: "título", "autor", "ano". Use essa lista para criar um DataFrame.

Resposta:

python
Copiar
Editar
livros = [
    {"título": "1984", "autor": "George Orwell", "ano": 1949},
    {"título": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"título": "O Alquimista", "autor": "Paulo Coelho", "ano": 1988}
]

df_livros = pd.DataFrame(livros)
print(df_livros)
Atividade 7
Crie um DataFrame a partir de uma lista de listas. Os dados devem representar [nome, idade] de três pessoas. Defina os nomes das colunas como "Nome" e "Idade".

Resposta:

python
Copiar
Editar
dados = [
    ["Lucas", 30],
    ["Fernanda", 27],
    ["Rafael", 25]
]

df = pd.DataFrame(dados, columns=["Nome", "Idade"])
print(df)
Atividade 8
Crie um DataFrame usando um array do NumPy com números inteiros de 1 a 9, em uma matriz 3x3. Defina os nomes das colunas como "A", "B", "C".

Resposta:

python
Copiar
Editar
import numpy as np

array = np.arange(1, 10).reshape(3, 3)
df = pd.DataFrame(array, columns=["A", "B", "C"])
print(df)
Atividade 9
Crie um DataFrame a partir de um dicionário de Series. Cada chave do dicionário deve representar uma coluna.

Resposta:

python
Copiar
Editar
dados = {
    "produto": pd.Series(["Arroz", "Feijão", "Macarrão"]),
    "preço": pd.Series([4.5, 5.0, 3.75])
}

df = pd.DataFrame(dados)
print(df)