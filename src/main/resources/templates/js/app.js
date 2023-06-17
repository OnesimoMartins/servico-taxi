//funcao para abrir o modal de solicitacao de uma corrida
document.addEventListener("DOMContentLoaded", function() {
  var modal = new bootstrap.Modal(document.getElementById("solicitarModal"));
  document.querySelector("button[data-target='#solicitarModal']").addEventListener("click", function() {
      modal.show();
  });
});

//funcao para abrir o modal de login do usuario
document.addEventListener("DOMContentLoaded", function() {
  var modal = new bootstrap.Modal(document.getElementById("loginModal"));
  document.querySelector("a[data-target='#loginModal']").addEventListener("click", function() {
      modal.show();
  });
});

//funcao para abrir o modal de register do usuario
document.addEventListener("DOMContentLoaded", function() {
  var modal = new bootstrap.Modal(document.getElementById("registerModal"));
  document.querySelector("a[data-target='#registerModal']").addEventListener("click", function() {
      modal.show();
  });
});

//funcao para fechar o modal de solicitacao de uma corrida
document.querySelector("#solicitarModal .modal-footer .btn-danger").addEventListener("click", function() {
  var modal = bootstrap.Modal.getInstance(document.getElementById("solicitarModal"));
  modal.hide();
});

// date picker para escolher a dala de aniversario
