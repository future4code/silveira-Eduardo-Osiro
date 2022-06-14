## 1.

# a) Foreign Key indica que uma propreiedade é uma foreign key, e deve referenciar um PRIMARY KEY de outra tabela.

# b) 
INSERT INTO Rating (id,comment,rate,movie_id)
value("comente01","Esse filme é muito bom",9.2,"004"),
("comente02","Não sei, não vi, não sou capaz de opinar",9.2,"002"),
("comente03","Juliana Paes é uma excelente atriz, mas a proposta do filme não me agrada",9.2,"003");

# c) Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

# d) ALTER TABLE Moves DROP evaluation;

# e) Não é possivel excluir uma linha que possui um dado que serve de referência para outra tabela, pois uma tabela não pode referenciar um dado nulo.

## 2.

# a) Essa é uma tablema que relaciona um ator a varios fimes e um filme a varios atores.

# b)

INSERT INTO Movie_Cast (movie_id, actor_id) value ("002","010"),("003","005"),("004","006");

# c) a query retornou um erro pois a coluna movie_id não pode receber um dado que não esta presente na coluna da tabela a qual está se referenciando.

# d)
a query retornou um erro pois a coluna movie_id não pode receber um dado que não esta presente na coluna da tabela a qual está se referenciando.

## 3.

# a) 
Mostra os filmes e o rating do filme. Serve para relacionar um filme a uma nota.

# b)

SELECT Moves.name as nome , Moves.id as  id , Rating.rate as nota FROM Moves JOIN Rating ON Moves.id = Rating.movie_id