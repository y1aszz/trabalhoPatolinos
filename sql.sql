CREATE TABLE produtos(
codigo SERIAL PRIMARY KEY,
titulo TEXT,
cadastro DATE,
preco REAL,
descricao TEXT,
imagem TEXT
)

INSERT INTO produtos (titulo, cadastro, preco, descricao, imagem)
VALUES ('Suicidas', '2023/06/06', 55.20, 'O primeiro romance do jovem autor que se firmou como principal nome do novo suspense brasileiro.', 'https://m.media-amazon.com/images/I/513MpXUFDLL._SX331_BO1,204,203,200_.jpg'),
  ('Dias perfeitos', '2023/06/06', 30.90, 'Sombrio e claustrofóbico, Dias perfeitos narra uma história de amor obsessivo e paranoico que consolida Raphael Montes como uma das mais gratas surpresas da literatura nacional.', 'https://m.media-amazon.com/images/P/B00J0GEZBA.01._SCLZZZZZZZ_SX500_.jpg'),
  ('Uma mulher no escuro', '2023/06/06', 34.90,'Um crime brutal cometido há vinte anos, uma única sobrevivente, o retorno calculado do assassino. Em quem Victoria deve confiar? ', 'https://m.media-amazon.com/images/P/B07QN8JZM5.01._SCLZZZZZZZ_SX500_.jpg'),
  ('O vilarejo', '2023/06/06', 34.90, 'lustrações coloridas dão vida a romance com elementos de horror gótico e suspense.', 'https://m.media-amazon.com/images/I/41R9pm5hL-L._SX346_BO1,204,203,200_.jpg'),
  ('Jantar secreto', '2023/06/06', 44.90, 'Novo romance da maior revelação da literatura de suspense no Brasil,um grupo de amigos organiza jantares misteriosos.', 'https://m.media-amazon.com/images/I/41Ph9pr6j7L._SX334_BO1,204,203,200_.jpg'),
  ('Saboroso Cadáver ', '2023/06/06', 39.90, 'O livro conta a história de um vírus que se espalha entre os animais de todo o planeta e torna sua carne mortal aos humanos. Impossibilitados de utilizar os animais para a alimentação, a sociedade regulariza a criação e a reprodução de seres humanos como animais de abate, transformando o mundo num lugar cinzento, cínico e inóspito.', 'https://m.media-amazon.com/images/I/41eSa0JNbOL._SX327_BO1,204,203,200_.jpg'),
  ('Lady Killers: Assassinas em Série', '2023/06/06', 50.30, 'Quando pensamos em assassinos em série, pensamos em homens. Mais precisamente, em homens matando mulheres inocentes, vítimas de um apetite atroz por sangue e uma vontade irrefreável de carnificina.', 'https://m.media-amazon.com/images/I/51h4aHf4aQL._SX341_BO1,204,203,200_.jpg'),
  ('O Morro dos Ventos Uivantes: Limited Edition', '2023/06/06', 74.52, 'Originalmente publicado em 1847, O Morro dos Ventos Uivantes, de Emily Brontë, combina paixão e trevas de maneira surpreendente.', 'https://m.media-amazon.com/images/I/51oGR6rWjvL._SX328_BO1,204,203,200_.jpg'),
  ('Só os Animais Salvam', '2023/06/06', 54.50, 'Nós, humanos, achamos que somos o máximo. Mas o que temos feito com o nosso mundo? Só os Animais Salvam é um livro que tenta responder a essa pergunta de maneira inusitada.', 'https://m.media-amazon.com/images/I/51GXE85RMvL._SX406_BO1,204,203,200_.jpg'),
  ('Butcher Boy: Infância Sangrenta', '2023/06/06', 36.99, 'A infância é um período de descobertas, em que a imaginação corre solta.', 'https://m.media-amazon.com/images/I/51QAtrQX55L._SX329_BO1,204,203,200_.jpg'),
  ('Verity', '2023/06/06', 36.40, 'Um casal apaixonado. Uma intrusa. Três mentes doentias. Finalista do prêmio Goodreads como melhor romance de 2019, Verity é o primeiro thriller de Colleen Hoover e deixa os leitores envolvidos do começo ao fim.', 'https://m.media-amazon.com/images/I/51ABRx3d7GL._SX335_BO1,204,203,200_.jpg'),
  ('A Biblioteca da Meia-Noite', '2023/06/06', 44.83, 'A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo.', 'https://m.media-amazon.com/images/I/51kAYMwbQIL._SX342_BO1,204,203,200_.jpg'),
  ('O Homem de Giz', '2023/06/06', 51.90, 'Assassinato e sinais misteriosos em uma trama para fãs de Stranger Things e Stephen King', 'https://m.media-amazon.com/images/I/41LuOehnKtL._SX335_BO1,204,203,200_.jpg'),
  ('O que aconteceu com Annie', '2023/06/06', 43.90, '“Quando minha irmã tinha oito anos, ela sumiu. Na época, achei que não poderia haver coisa pior. E então ela voltou.“', 'https://m.media-amazon.com/images/I/41AaH9+vreL._SX343_BO1,204,203,200_.jpg'),
  ('As crianças daquele verão', '2023/06/06', 32.80, 'O aguardado novo thriller de Dot Hutchison, autora best-seller de O jardim das borboletas e Rosas de maio.', 'https://m.media-amazon.com/images/I/51E8dzC35QL._SX340_BO1,204,203,200_.jpg'),
  ('Manual de assassinato para boas garotas: 1 ', '2023/06/06', 44.90, 'Uma investigação obsessiva, cheia de reviravoltas e com um final de tirar o fôlego', 'https://m.media-amazon.com/images/I/41Ke1DL704L._SX298_BO1,204,203,200_.jpg'),
  ('Boa garota nunca mais: Manual de assassinato para boas garotas (vol. 3)', '2023/06/06', 44.90, 'Na conclusão arrepiante da série best-seller Manual de assassinato para boas garotas, chegou a hora de Pip salvar a si mesma', 'https://m.media-amazon.com/images/I/41CBiSOfx9L._SX298_BO1,204,203,200_.jpg'),
  ('Os Dois Morrem no Final', '2023/06/06', 44.90, 'Emocionante e inesquecível, aguardado livro de Adam Silvera chega ao Brasil em outubro', 'https://m.media-amazon.com/images/I/41K6LsoDz9L._SX319_BO1,204,203,200_.jpg'),
  ('Coleção Agatha Christie - Box 1', '2023/06/06', 69.90, 'Livro 1 - Morte no Nilo Livro 2 - Um corpo na biblioteca Livro 3 - Assassinato no Expresso do Oriente', 'https://m.media-amazon.com/images/I/51iOYkdVGfL._SX391_BO1,204,203,200_.jpg'),
  ('Ed & Lorraine Warren. Lugar Sombrio', '2023/06/06', 48.90, 'O casal de investigadores paranormais favorito dos darksiders está de volta. Depois do grande sucesso de Ed & Lorraine Warren: Demonologistas, a DarkSide Books reabre seus Arquivos Sobrenaturais para desenterrar um dos casos mais assustadores dos últimos 30 anos.', 'https://m.media-amazon.com/images/I/515NqWqxLXL._SX352_BO1,204,203,200_.jpg');

  SELECT * FROM produtos

  SELECT * FROM produtos WHERE codigo=$1

  DELETE FROM produtos WHERE codigo=$1

  INSERT INTO produtos(titulo, cadastro, preco, descricao, imagem) VALUES ($1, $2, $3, $4, $5) RETURNING codigo, titulo, cadastro, preco, descricao, imagem;