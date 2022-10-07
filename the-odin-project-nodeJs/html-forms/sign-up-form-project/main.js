var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '';
      document.getElementById("submitbtn").disabled = false
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "Passwords don't match";
      document.getElementById("submitbtn").disabled = true
    }
  }