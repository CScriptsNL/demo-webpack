$(function() {
  $("form[name='frmContact']").validate({
    rules:{
      senderName:{
        required:true,
        minlength:3
      },
      senderEmail:{
        required:true
      },
      msgSubject:{
        required:true
      },
      msgText:{
        required:true
      }
    },
    messages:{
      senderName:{
        required:"Uw naam is niet ingevuld.",
        minlength:"Uw naam is te kort."
      },
      senderEmail:{
        required:"uw email is niet ingevuld."
      },
      msgSubject:{
        required:"Het onderwerp is niet ingevuld."
      },
      msgText:{
        required:"Het bericht is niet ingevuld."
      }
    },
    submitHandler:{
      function(form) {
        form.submit();
      }
    }
  });
});
