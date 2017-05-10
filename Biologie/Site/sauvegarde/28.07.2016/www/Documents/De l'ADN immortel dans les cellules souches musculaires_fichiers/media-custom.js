(function ($) {
    
Drupal.behaviors.mediaCustom = {
    attach: function(context, settings) {
        var form_upload= $('#media-add-upload');
        if (form_upload.length > 0) {
            // Ajout d'un faux bouton de transfert
            if ($('.form-managed-file .form-submit', form_upload).length > 0) {
                // Les vrai boutons sont masqués
                $('.form-managed-file .form-submit', form_upload).hide();
                $('#media-add-upload #edit-submit').hide();
                
                // Auto-submit si le download est terminé
                if ($('.form-managed-file .form-submit', form_upload).attr('name') == 'upload_remove_button'
                    && !$('#media-add-upload #edit-submit').hasClass('clicked')) {
                    $('#media-add-upload #edit-submit').addClass('clicked');
                    $('#media-add-upload #edit-submit').click();
                    $('#edit-upload-fake', form_upload).hide();
                // Sinon on ajoute un faux bouton de transfert
                } else {
                    if ($('#edit-upload-fake', form_upload).length > 0)
                        $('#edit-upload-fake', form_upload).remove();
                    
                    var fake_transfer = $('<a/>', {
                        'id' : 'edit-upload-fake',
                        'class' : 'button button-yes',
                        'href' : '#',
                        'title' : Drupal.t('Upload'),
                        'text' : Drupal.t('Upload')
                    });
                    fake_transfer.mousedown(function() {
                        $('.form-managed-file .form-submit', form_upload).mousedown();
                        $('.form-item-folder', form_upload).hide();
                        $('#edit-upload-fake', form_upload).hide();
                        return false;
                    });
                    fake_transfer.insertAfter('#media-add-upload #edit-submit');
                }
                
            }
        }
    }
}

})(jQuery);