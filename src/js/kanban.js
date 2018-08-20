let DB = initializing();
bitacora.initializeFirebase();
document.getElementById('logOut').addEventListener('click', event => {
  event.preventDefault();
  bitacora.singOut();
});
