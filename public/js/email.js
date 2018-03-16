$("#enviar").click(function(){

      var nombres = $('#nombres').val();
      var email = $('#email').val();
      var mensaje = $('#mensaje').val();
      var telefono = $('#telefono').val();

      if (nombres == '') {
        
        function validation(){
          $('#nombres').focus();
           swal("Cuidado! ", "Ingrese los Nombres Por Favor...", "error");
          };
          validation();

        return;
      }

      if (email == '') {
        
        function validation(){
          $('#email').focus();
           swal("Cuidado! ", "Ingrese un Correo Electronico Por Favor...", "error");
          };
          validation();

        return;
      }

      if (telefono == '') {
        
        function validation(){
          $('#telefono').focus();
           swal("Cuidado! ", "Ingrese un Numero de Telefono Por Favor...", "error");
          };
          validation();

        return;
      }


      if (mensaje == '') {
        
        function validation(){
          $('#mensaje').focus();
           swal("Cuidado! ", "Ingrese un Mensaje Por Favor...", "error");
          };
          validation();

        return;
      }

      
       swal({
              title: 'Espere Un Momento PorFavor',
              text: 'Estamos Procesando la Informacion',
              onOpen: function () {
                swal.showLoading()
              }
            })
      
        $.post(
              'php/email.php',
        {
          nombres: nombres,
          email: email,
          mensaje: mensaje,
          telefono: telefono
        },
        function(data){
          $("#resultados").html(data);
          })
});