   var question = 1;
       
    $(document).ready(function(e){
       $('.imgEffect').on('click',function(e){
           $('.nextBTN').removeAttr('disabled');
           if(question==4){
           $('.final').removeAttr('disabled');
           }
       }) 
        
       $('.nextBTN').on('click',function(e){
           question++;
           if(question==2){
               $('body').addClass('cityRoad');
           }
           if(question==3){
               $('body').addClass('greenMountains');
           }
           
           if(question==4){
               $('body').addClass('shop');
               $(this).hide();
               $('.final').show();
           }
           
           $(this).attr('disabled','true');
           $('.final').attr('disabled','true');
           
           $('.question').each(function(e){
              $(this).hide(); 
           });    
           
           var className = '#question'+question;
           $(className).show();
           
       }) 
        
        $('.final').on('click',function(e){
             $('body').addClass('success');
            var answers = 0;
           $('.question').each(function(e){
              $(this).hide(); 
           });
            
            
           if($('input[name=question1]:checked').val() == 'shark'){
              $('.answer1').html('<i class="fa fa-check"></i>');
               answers++
           }  
           if($('input[name=question2]:checked').val() == 'cycling'){
              $('.answer2').html('<i class="fa fa-check"></i>');
               answers++
           }  
           if($('input[name=question3]:checked').val() == 'windmill'){
              $('.answer3').html('<i class="fa fa-check"></i>');
               answers++
           }  
           if($('input[name=question4]:checked').val() == 'shirt'){
              $('.answer4').html('<i class="fa fa-check"></i>');
               answers++
           } 
            
            $('.score').html('You have scored '+answers+'/4');    
            
           $(this).hide();
           $("#result").show();    
            
        });
        
        
    });   
      console.log('%c Dont check the code to cheat.. Answer your question wisely.. ;)', 'background: green; color: white; display: block;'); 