$(function(){
    var $pseudo = $('#pseudo'),
        $password = $('#password'),
        $confirm_password = $('#confirm_password'),
        $email = $('#email'),
        $btn_envoyer = $('#btn_envoyer'),
        $btn_reset = $('#btn_reset'),
        $error = $('#error'),
        $success = $('#success'),
        $champ = $('.form-control');
    $error.css('display', 'none');
    $success.css('display', 'none');
    $champ.keyup(function(){
        if($(this).val().length < 5) {
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
        } else {
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });
        }
    });
    $confirm_password.keyup(function(){
        if($(this).val() != $password.val()){
            $(this).css({
                borderColor : 'red',
                color : 'red'
            });
        } else {
            $(this).css({
                borderColor : 'green',
                color : 'green'
            });
        }
    })
    $btn_envoyer.click(function(e){
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi  champs :);
       // puis on lance la fonction de vérification sur tous les
       $error.css('display', 'none');
       verifier($pseudo);
       verifier($password);
       verifier($confirm_password);
       verifier($email);
       if($error.css('display') === 'none'){
            $success.css('display', 'block');
       }
    });
    $btn_reset.click(function(){
        $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor : '#ccc',
            color : '#555'
        });
        $error.css('display', 'none'); // on prend soin de cacher le message d'erreur
        $success.css('display', 'none');
    });
    function verifier(champ){
        if(champ.val() == ""){ // si le champ est vide
            $error.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor : 'red',
                color : 'red'
            });
        }
    }
});