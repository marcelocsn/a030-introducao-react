<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>LabeTube</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="tela-inteira">
        <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca">
        </header>

        <main>
            <nav class="menu-vertical">
                <ul>
                    <li class="botoes-meunu-vertical">Início</li>
                    <li class="botoes-meunu-vertical">Em alta</li>
                    <li class="botoes-meunu-vertical">Inscrições</li>
                    <hr>
                    </hr>
                    <li class="botoes-meunu-vertical">Originais</li>
                    <li class="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section class="painel-de-videos">
                <div class="box-pagina-principal media1" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
                <div class="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
                    <h4>Título do vídeo</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
</body>

<script>
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
</script>

</html>
