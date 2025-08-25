# Snake Moderno 🐍

Este é um projeto de recriação do clássico Snake Game, desenvolvido do zero com HTML, CSS e JavaScript puros. O objetivo foi modernizar a experiência do jogo clássico, focando em uma interface limpa, controles fluidos e uma jogabilidade que se torna progressivamente mais desafiadora.

O projeto inteiro está contido em um **único arquivo HTML**, tornando-o extremamente portátil e fácil de executar.

-----

## ✨ Features

  * **Interface Moderna:** Design limpo com efeito de vidro fosco (glassmorphism), fontes legíveis e uma estética minimalista.
  * **Dificuldade Progressiva:** A cobra começa em uma velocidade controlável e fica mais rápida à medida que o jogador acumula pontos, mantendo o desafio sempre presente.
  * **Controles Ultra-Responsivos:** Utiliza uma fila de comandos (input queue) para garantir que nenhuma tecla seja perdida, permitindo curvas rápidas e precisas sem a sensação de "delay".
  * **Totalmente Portátil:** Todo o código (HTML, CSS e JavaScript) está em um único arquivo. Não há necessidade de instalação ou dependências.
  * **Customização de Cor:** O jogador pode escolher a cor da cobra antes de cada partida.
  * **Interface Não-Selecionável:** A seleção de texto é desativada para que o uso das teclas de seta não interfira na experiência de jogo.
  * **Compatibilidade:** Funciona em todos os navegadores modernos, utilizando prefixos CSS para maior compatibilidade.

-----

## 💻 Tecnologias Utilizadas

  * **HTML5:** Para a estrutura semântica da página e o elemento `<canvas>`.
  * **CSS3:** Para a estilização completa, incluindo:
      * Flexbox para o layout.
      * Variáveis CSS para um tema de cores consistente.
      * Gradientes, sombras (`box-shadow`) e `backdrop-filter` para a estética moderna.
      * `user-select` para melhorar a usabilidade.
  * **JavaScript (ES6+):** Para toda a lógica do jogo, incluindo:
      * Manipulação do Canvas para renderização.
      * O loop principal do jogo (`setInterval`).
      * Manipulação do DOM para placar e controles.
      * Lógica de colisão, pontuação e aumento de velocidade.

-----

## 🚀 Como Executar

A execução deste projeto é extremamente simples:

1.  **Copie o Código:** Copie todo o conteúdo do arquivo `.html` fornecido.
2.  **Salve o Arquivo:** Cole o código em um editor de texto e salve-o com a extensão `.html` (por exemplo, `snake.html`).
3.  **Abra no Navegador:** Arraste o arquivo salvo para qualquer navegador de internet moderno (Chrome, Firefox, Edge, etc.) ou dê um duplo clique sobre ele.

O jogo iniciará instantaneamente!

-----

## 🎮 Como Jogar

1.  **Escolha sua Cor:** Use o seletor de cores circular para definir a aparência da sua cobra.
2.  **Inicie o Jogo:** Clique no botão **"Jogar"**.
3.  **Controle a Cobra:** Use as **teclas de seta** ou as teclas **WASD** para mover a cobra:
      * **↑ / W:** Mover para Cima
      * **↓ / S:** Mover para Baixo
      * **← / A:** Mover para a Esquerda
      * **→ / D:** Mover para a Direita
4.  **Objetivo:** Coma as comidas coloridas para aumentar sua pontuação. Cada comida vale 10 pontos.
5.  **O Desafio:** A cada 30 pontos, a velocidade da cobra aumenta\! Prepare seus reflexos.
6.  **Fim de Jogo:** O jogo termina se a cobra colidir com as paredes ou com o seu próprio corpo.
