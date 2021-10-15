
contactApp.controller('LoginController', ['$scope', function($scope) {
    console.log("estamos en Login!");
    
    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.location="../ListaContactos/ListaContactos.html";
        }
    });

    // Función de login de usuarios

    $scope.login = function(){

        var email = $scope.emailInput;
        var password = $scope.passwordInput;

        if(email && password){
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function(){})
            .catch(function(error){
                console.log(error);
                if(error.code === 'auth/wrong-password'){
                    swal("Atención","Usuario o contraseña incorrectos!","warning");    
                }else if(error.code === 'auth/user-not-found'){
                    swal("Atención","Usuario no registrado!","warning");
                }
            })
        }else{
            swal("Atención","Falta diligenciar los campos","warning");
        }
    }

    //Recuperar Contraseña

    $scope.passwordRecover = function(){
        var email = $scope.emailInput;

        if(email){

            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                
            .then((willDelete) => {
              if (willDelete){
                firebase.auth().sendPasswordResetEmail(email)
                .then(function(){
                    swal("Atención","Revisa tu correo electrónico para recuperar","success");      
                })
                .catch(function(error){
                    console.log(error);
                })                 
              }  
            });

        }else{
            swal("Alerta", "Para recuperar hay que escribir un Correo", "warning")
        }
    }


}]);