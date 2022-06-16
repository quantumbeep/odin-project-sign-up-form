const checkSame = () => {
  const password = document.getElementById('password').value;
  const passwordCopy = document.getElementById('confirm').value;
  if (password === passwordCopy) {
    document.getElementById('message').innerHTML = 'Passwords match.';
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirm').style.border = '3px solid green';
  } else {
    document.getElementById('message').innerHTML = 'Passwords do not match.';
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirm').style.border = '3px solid red';
  }
};
