function img(src) {
    document.querySelector('.main_image img').src = src;
  }

  // Adiciona evento de clique a todas as imagens de opção
  document.querySelectorAll('.option img').forEach(imgElement => {
    imgElement.addEventListener('click', function() {
      img(this.src); // Atualiza a imagem principal com o src da imagem clicada
    });
  });


  function openTab(tabId) {
    // Remove active class from all tab buttons
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Hide all tab panes
    var tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(function(pane) {
        pane.classList.remove('active');
    });

    // Show the selected tab pane and add active class to the corresponding button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}