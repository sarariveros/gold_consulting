<?php

$nombres =   isset( $_POST['nombres'] ) ? $_POST['nombres'] : '';
$email =   isset( $_POST['email'] ) ? $_POST['email'] : '';
$mensaje  =   isset( $_POST['mensaje'] ) ? $_POST['mensaje'] : '';
$telefono  =   isset( $_POST['telefono'] ) ? $_POST['telefono'] : '';
$cabecera = 'HUILLCO CONSULTING';
$contenido = '
						<html>
						<head>
							<title></title>
						</head>
						<body>

							 <h2>Asunto: CONSULTORIAS</h2>
							 <p>La Persona <b>'.$nombres. '</b> con telefono <b>'.$telefono.' </b> te ha enviado el siguiente mensaje:</p>
							 <p>'.$mensaje. ' <br><br> Puedes ponerte en contacto con la persona al Correo Electronico: '.$email.'</p>
							 <hr>

						</body>
						</html>';


$headers = "From: $email <$email>\r\n";
$headers .= "Cc: ".$_POST['email']."\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

$envio = mail('contactanos@huillco.com', $cabecera, $contenido, $headers);


if($envio) {
$miresultado = '<script>
					swal("Buen Trabajo!", "El Email Ha Sido Enviado Con Exito", "success");
				</script>';
} else{

$miresultado = '<script>
					swal("Lo Sentimos", "Ha Ocurrido Un Error", "error");
				</script>';

}

echo $miresultado;
