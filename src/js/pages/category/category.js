document.querySelectorAll('.catagories-menu li > a').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      let parent = this.parentElement;
      
      // Se já estiver ativo, remove a classe e fecha o submenu
      if (parent.classList.contains('active')) {
        parent.classList.remove('active');
      } else {
        // Fecha todos os submenus abertos
        document.querySelectorAll('.catagories-menu li').forEach(function(li) {
          li.classList.remove('active');
        });
        
        // Abre o submenu clicado
        parent.classList.add('active');
      }
    });
  });
  