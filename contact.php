<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$to_email = "antema103@gmail.com";
$subject_prefix = "Nouveau message depuis le portfolio";

// Fonction pour nettoyer les données
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Vérifier que la requête est en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer les données du formulaire
    $name = isset($_POST['name']) ? clean_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? clean_input($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? clean_input($_POST['subject']) : '';
    $message = isset($_POST['message']) ? clean_input($_POST['message']) : '';
    
    // Validation des données
    $errors = array();
    
    if (empty($name)) {
        $errors[] = "Le nom est requis";
    }
    
    if (empty($email)) {
        $errors[] = "L'email est requis";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "L'email n'est pas valide";
    }
    
    if (empty($subject)) {
        $errors[] = "Le sujet est requis";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis";
    }
    
    // Si pas d'erreurs, envoyer les emails
    if (empty($errors)) {
        
        // Email pour Antema
        $email_subject = $subject_prefix . " : " . $subject;
        $email_body = "Vous avez reçu un nouveau message depuis votre portfolio.\n\n";
        $email_body .= "Détails du message :\n";
        $email_body .= "Nom : " . $name . "\n";
        $email_body .= "Email : " . $email . "\n";
        $email_body .= "Sujet : " . $subject . "\n\n";
        $email_body .= "Message :\n" . $message . "\n";
        
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        $mail_sent = mail($to_email, $email_subject, $email_body, $headers);
        
        // Email de confirmation pour le visiteur
        if ($mail_sent) {
            $confirm_subject = "Confirmation de réception de votre message";
            $confirm_body = "Bonjour " . $name . ",\n\n";
            $confirm_body .= "Merci de m'avoir contacté via mon portfolio. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.\n\n";
            $confirm_body .= "Votre message :\n";
            $confirm_body .= "Sujet : " . $subject . "\n";
            $confirm_body .= "Message : " . $message . "\n\n";
            $confirm_body .= "Cordialement,\n";
            $confirm_body .= "Antema Nirina Andriamihaja\n";
            $confirm_body .= "Développeur Full Stack";
            
            $confirm_headers = "From: " . $to_email . "\r\n";
            $confirm_headers .= "Reply-To: " . $to_email . "\r\n";
            $confirm_headers .= "X-Mailer: PHP/" . phpversion();
            
            mail($email, $confirm_subject, $confirm_body, $confirm_headers);
            
            echo json_encode(array(
                "success" => true,
                "message" => "Votre message a été envoyé avec succès ! Vous allez recevoir un email de confirmation."
            ));
        } else {
            echo json_encode(array(
                "success" => false,
                "message" => "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
            ));
        }
        
    } else {
        echo json_encode(array(
            "success" => false,
            "message" => "Erreurs de validation",
            "errors" => $errors
        ));
    }
    
} else {
    echo json_encode(array(
        "success" => false,
        "message" => "Méthode non autorisée"
    ));
}
?>
