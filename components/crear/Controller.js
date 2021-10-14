
contactApp.controller('CrearController', ['$scope', function($scope) {
  console.log("Esto Funciona");


  $scope.crear = function(){

    const name = $scope.nameInput;
    const phone = $scope.phoneInput;
    const email = $scope.emailInput;
    var user = firebase.auth().currentUser;
    
    
    if(name && phone && email){
        db.collection(user.email).doc(email).set({
          nombre: name,
          telefono: phone,
          correo: email,
        })
         .then(function(docRef){
             swal("Bien!","Contacto creado!","success");
             $scope.nameInput = undefined;
             $scope.phoneInput = undefined;
             $scope.emailInput = undefined;
             $scope.$apply();
          })
          .catch(function(error){
            console.error(error);
             swal("Error","Problemas en base de datos!","error");

          });


    }else{
        swal("ATENCION", "Faltan diligenciar campos","warning");
    }


    

  }

}]);