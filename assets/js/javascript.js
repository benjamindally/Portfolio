$(function() {
  $("#connect_submit_button").click(function() {
    let name = $("#name")
      .val()
      .trim();
    let email = $("#email")
      .val()
      .trim();
    let message = $("#message")
      .val()
      .trim();
    let regEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    document.getElementById("message_break").innerHTML = "<p><p>";
    document.getElementById("email_break").innerHTML = "<p><p>";
    document.getElementById("name_break").innerHTML = "<p><p>";

    if (name === "") {
      let errorMessageName = "Please enter your name.";
      document.getElementById("name_break").innerHTML =
        "<p>" + errorMessageName + "<p>";
    }

    if (!regEx.test(email)) {
      let errorMessageEmail = "Please enter a valid email address";
      document.getElementById("email_break").innerHTML =
        "<p>" + errorMessageEmail + "<p>";
    }

    if (message === "") {
      let errorMessageMessage = "Please enter a message.";
      document.getElementById("message_break").innerHTML =
        "<p>" + errorMessageMessage + "<p><br>";
    }

    // let dataString = "name=" + name + "&email=" + email + "&message=" + message;

    let url = $(".contact_form").attr("action");
    let type = $(".contact_form").attr("method");
    let data = {
      name: name,
      email: email,
      message: message,
    };

    if (regEx.test(email) && name != "" && message != "") {
      $.ajax({
        type: type,
        url: url,
        data: data,
        cache: false,
        success: function(result) {
          console.log(result);
        },
      });
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      alert(`Thank you.`);
    }
  });
});
