<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <h1>User Page</h1>

    <div>name: <input type="text" name="name" id="form-name" class="disabled" disabled></div>
        <div>password: <input type="text" name="pass" id="form-pass" class="disabled" disabled></div>
        <div>birthday: <input type="text" name="birthday" id="form-birth" class="disabled" disabled></div>
        <div>sex:
            <div> <input type="radio" value="male" name="sex" id="male" class="disabled" disabled checked>male</div>
            <div><input type="radio" value="female" name="sex" id="female" class="disabled" disabled>female</div>
            <div><input type="radio" value="other" name="sex" id="other" class="disabled" disabled>other</div>
        </div>


    <button id="logout">LogOUT</button>
    <button id="change">CHANGE</button>
    <button id="update-cancel" class="update-user">Cancel</button>
    <button id="update-input" class="update-user">Update</button>
    
    
    <script src="js/ajax.js"></script>
    <script src="js/change_user_data.js"></script>
    <script src="js/logout.js"></script>
</body>

</html>