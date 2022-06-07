1.
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) 
VARCHAR: strings de no máximo n caracteres.
PRIMARY KEY: identificardor único de cada item.
NOT NULL: preenchimento obrigatório.
DATE: representa uma data.

b)
SHOW DATABASES: banco de dados do sistema.
SHOW TABLES: mostra tabelas do banco atual.

c)
DESCRIBE: usado para mostrar a estrutura da tabela.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

2.
a) INSERT INTO Actor VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female" );

b) Código de erro: 1062. Entrada duplicada "002" para chave 'PRIMARY'.

c) Código de erro 1136. A contagem de colunas não contagem de valor de correspondncia na linha. Faltava a coluna salary.

d) Código de erro 1364. Esse erro reporta que o campo de nome não pode ter um valor nulo, precisa ser preenchido.

e) Código de erro 1292.  Esse erro é determinado pois o formato de resposta passado para o birth_date é inválido, deveria seguir com o pardão para string "YYYY-MM-DD".

f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Chay Suede", 100000, "1992-06-30", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("007", "Bárbara Paz", 200000, "1974-10-17", "female");

-----------------------------------------------------------------------------------------------------------------------------------------------------------

3.
a) SELECT id, name from Actor WHERE gender = "female";

b) SELECT id, salary from Actor WHERE name = "Tony Ramos";

c) SELECT id, name from Actor WHERE gender = "Invalid";
Sem retorno, gender = "Invalid" = nulls

d) SELECT id, name salary from Actor WHERE salary < 500000;

e) SELECT id, nome from Actor WHERE id = "002";
Erro 1054. Coluna desconhecida 'nome' na 'lista de campos'. O tipo name está incorreto.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

4.
a) O LIKE é usado para comparar strings. % é curinga, procurando entre os values que possuem A e J e o salary acima de 300000.
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

-----------------------------------------------------------------------------------------------------------------------------------------------------------

5.
a) 
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date_of DATE NOT NULL,
    evaluation VARCHAR(2) NOT NULL
);

b) INSERT INTO Movie VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);

c) INSERT INTO Movie VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

d) INSERT INTO Movie VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

e)INSERT INTO Movie VALUES ("004", "Lisbela e o Prisioneiro", "A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.", "2003-08-22", 7);

-----------------------------------------------------------------------------------------------------------------------------------------------------------

6.
a) SELECT id, title, evaluation FROM Movie WHERE id = "004";

b) SELECT title FROM Movie WHERE title = "Lisbela e o Prisioneiro";

c) SELECT id, title, synopsis FROM Movie WHERE evaluation >= 7;


-----------------------------------------------------------------------------------------------------------------------------------------------------------
 
7.
a) SELECT * FROM Movie WHERE title LIKE "%vida%";

b) SELECT * FROM Movie WHERE title LIKE "%você%" OR synopsis LIKE "%anos%";

c) SELECT * FROM Movie WHERE release_date_of < "2022-06-06";

d) SELECT * FROM Movie WHERE release_date_of < "2022-06-06" and (title LIKE "%você" OR synopsis LIKE "%anos%") and evaluation > 7;

