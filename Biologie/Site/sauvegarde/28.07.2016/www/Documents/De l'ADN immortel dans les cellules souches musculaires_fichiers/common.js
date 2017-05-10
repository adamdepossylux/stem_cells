(function ($) {
  Drupal.behaviors.pasteur_theme = {

    attach: function (context, settings) {
      $('.slideUpDown h2,.slideUpDown h2._close1 a').click(function() {
        if($(this).parents('li').find('.response').hasClass('actif')){
          $(this).parents('li').find('.response').removeClass('actif');
        }else {
          $(this).parents('li').find('.response').addClass('actif');
        }
        return false;
      });

      $('#edit-field-event-themes-tid-i18n').change(function(){
        if(show_place_by_taxonomy != 'undefined') {
          var value = $(this).find('option:selected').val();
          if(show_place_by_taxonomy[value] == '1') {
            $('#edit-field-department-gid').show();
            $('#edit-field-department-gid-container').show();
          } else {
            $('#edit-field-department-gid').hide();
            $('#edit-field-department-gid-container').hide();
          }
        }
      });
      $('#edit-field-thematic-tid-i18n').change(function(){
        if(show_place_by_taxonomy != 'undefined') {
          var value = $(this).find('option:selected').val();
          if(show_place_by_taxonomy[value] == '1') {
            $('#edit-group-audience-gid').show();
            $('#edit-group-audience-gid-container').show();
          } else {
            $('#edit-group-audience-gid').hide();
            $('#edit-group-audience-gid-container').hide();
          }
        }
      });

      $(document).ready(function(){
          if($('#edit-field-event-themes-tid-i18n').length > 0 && show_place_by_taxonomy != 'undefined') {
            var value = $('#edit-field-event-themes-tid-i18n').find('option:selected').val();
            if(show_place_by_taxonomy[value] == '1') {
              $('#edit-field-department-gid').show();
              $('#edit-field-department-gid-container').show();
            } else {
              $('#edit-field-department-gid').hide();
              $('#edit-field-department-gid-container').hide();
            }
          }
          if($('#edit-field-thematic-tid-i18n').length > 0 && show_place_by_taxonomy != 'undefined') {
            var value = $('#edit-field-thematic-tid-i18n').find('option:selected').val();
            if(show_place_by_taxonomy[value] == '1') {
              $('#edit-group-audience-gid').show();
              $('#edit-group-audience-gid-container').show();
            } else {
              $('#edit-group-audience-gid').hide();
              $('#edit-group-audience-gid-container').hide();
            }
          }
        });

      $(document).ready(function(){
        if($('.pane-views-panes').length > 0) {
          var first_panel = $('.pane-views-panes:first').find('.list_tabs ul');
          $('.pane-views-panes .list_tabs li').each(function(){
            if($('.pane-views-panes:first').find('.list_tabs li:first') != $(this)){
              first_panel.append($(this));
            }
          });
          if($('.pane-entity-field').length > 0){
            $('.pane-entity-field').each(function(){
              var title = $('.pane-entity-field').find('h2');
              first_panel.append('<li><a class="field-items" title="'+title.html()+'" href="#">'+title.html()+'</a></li>');
              title.remove();
              $(this).find('.field-items').addClass('hidden');
              $(this).find('.field-items').addClass('tabs_item');
            });
          }
          $('.pane-views-panes:first').find('.list_tabs li:first').addClass('current');
          $('.pane-views-panes:first').find('.result:first').removeClass('hidden');
        }

        $('.pane-views-panes:first').find('.list_tabs li a').click(function(){
          var className = $(this).attr('class');
          if($('.pane-views-panes').find('.result.'+className).length > 0){
            $('.pane-views-panes').find('.result').addClass('hidden');
            $('.pane-entity-field').find('div.field-items').addClass('hidden');
            $('.pane-views-panes').find('.result.'+className).removeClass('hidden');
            $('.pane-views-panes:first').find('.list_tabs li').removeClass('current');
            $(this).parent().addClass('current');
          }
          if($('.pane-entity-field').find('div.'+className).length > 0){
            $('.pane-views-panes').find('.result').addClass('hidden');
            $('.pane-entity-field').find('div.'+className).removeClass('hidden');
            $('.pane-views-panes:first').find('.list_tabs li').removeClass('current');
              $(this).parent().addClass('current');
          }
          return false;
        });

        $(document).ready(function(){
          swap_val = [];
          $(".swap").each(function(i){
          swap_val[i] = $(this).val();
          $(this).focusin(function(){
           if ($(this).val() == swap_val[i]) {
            $(this).val("");
           }
          }).focusout(function(){
           if ($.trim($(this).val()) == "") {
            $(this).val(swap_val[i]);
           }
          });
         });
        });

        $(document).ready(function(){
          $('#home_choose_department').change(function(){
            if($(this).val() != '') {
              window.location = $(this).val();
            }
          });
          $('#destination_to_go').change(function(){
              if($(this).val() != '') {
                window.location = $(this).val();
              }
            });

        });

      });

      $(document).ready(function() {

          $('ul#jqRoundAbout').roundabout(
            {minOpacity: 1.0, maxOpacity: 1.0}
          );
          $('ul#jqRoundAboutPresse').roundabout(
              {minOpacity: 1.0, maxOpacity: 1.0, shape: 'waterWheel', maxScale: 0.6}
            );

          $("ul.containerDataByLettre[title!='a']").css({'display':'none'});

          $('ul#jqRoundAbout li a').add('ul#jqRoundAboutPresse li a').bind('click', function(e){
            $('#to_show_diseases').empty();
            e.preventDefault();
            var letter = new Array();
            var $this = $(this);
            letter['a'] = 1;
            letter['b'] = 2;
            letter['c'] = 3;
            letter['d'] = 4;
            letter['e'] = 5;
            letter['f'] = 6;
            letter['g'] = 7;
            letter['h'] = 8;
            letter['i'] = 9;
            letter['j'] = 10;
            letter['k'] = 11;
            letter['l'] = 12;
            letter['m'] = 13;
            letter['n'] = 14;
            letter['o'] = 15;
            letter['p'] = 16;
            letter['q'] = 17;
            letter['r'] = 18;
            letter['s'] = 19;
            letter['t'] = 20;
            letter['u'] = 21;
            letter['v'] = 22;
            letter['w'] = 23;
            letter['x'] = 24;
            letter['y'] = 25;
            letter['z'] = 26;
            var cpt = 0;
            var no_res = false;
            while ($("ul.containerDataByLettre:first li[rel='"+$this.attr('rel')+"']").length == 0){
              no_res = true;
              $this = $this.parent().next('li').find('a');
              if(cpt >= 27) {
                return;
              }
              cpt++;
            }
            if(no_res){
              var indexToMoveOn = letter[$this.attr('rel')]-1;
              var letterToUse = $this.attr('rel');
              $('ul#jqRoundAbout').add('ul#jqRoundAboutPresse').roundabout('animateToChild',indexToMoveOn);

            }


            var link  = $this.attr('href');
            var lettre = $this.attr('rel');

            $('ul#jqRoundAbout li a').add('ul#jqRoundAboutPresse li a').removeClass('roundabout-in-focus');

            if(typeof(letterToUse) == 'undefined'){
              var letterToUse = $(this).attr('rel');
            }
            var tailleLetter = 0;
            tailleLetter = $('.containerDataByLettre li[rel='+letterToUse+']').length;
            if(tailleLetter < 8){
              var append = false;
              var cpt = 0
              var tailleToPass = tailleLetter / 2;
              $('.containerDataByLettre li').each(function(){
                if($(this).attr('rel') == letterToUse){
                  append = true;
                }

                if(append == true && cpt < 8) {
                  var objCloned = $(this).clone();
                  if(cpt==0 || cpt == 4 ){
                    $('#to_show_diseases').append('<ul class="containerDataByLettre"></ul>');
                  }
                  $('#to_show_diseases ul.containerDataByLettre:last').append(objCloned);
                  cpt++;
                }
              });
            }else {
                var append = false;
                var cpt = 0
                var tailleToPass = tailleLetter / 2;
                $('.containerDataByLettre li[rel='+letterToUse+']').each(function(){
                    var objCloned = $(this).clone();
                    if(cpt==0 || cpt == parseInt(tailleToPass) ){
                      $('#to_show_diseases').append('<ul class="containerDataByLettre"></ul>');
                    }
                    $('#to_show_diseases ul.containerDataByLettre:last').append(objCloned);
                    cpt++;

                });
            }

            return true;
          });

          $("ul#jqRoundAbout li a[rel='a']").add("ul#jqRoundAboutPresse li a[rel='a']").trigger('click');

        });
      
        // Blocs sous-sommaire
        $('.blocks_summary li')
            .css('cursor', 'pointer')
            .click(function() {
                var url = $('a', this).attr('href');
                if (url) document.location = url;
            });
        
        // Uniformisation des sous-menus
        var maxHeight = 150;
        $('.block_navigation ul li .submenu').each(function() {
            $(this).css('display', 'block');
            var itemHeight = parseInt($(this).first().height()) - 75;
            if (itemHeight > maxHeight)
                maxHeight = itemHeight;
            $(this).css('display', '');
        });
        $('.block_navigation ul li .submenu .content_submenu > ul > li').css('height', maxHeight + 'px');

    }



  };
})(jQuery);

