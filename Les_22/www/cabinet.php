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
    
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 center">
            <h4>User Page</h4>
            </div>
            <div class="col l12 center">
            <button id="logout" class="waves-effect waves-light btn red accent-4"><i class="material-icons right">exit_to_app</i>LogOUT</button>
            <p></p>
            </div>
            <div class="col l12 center">
            <button id="change" class="waves-effect waves-light btn">CHANGE</button>
            </div>
            </div>
            <div class="col l12 center">
            <button id="update-cancel" class="update-user waves-effect waves-light btn">Cancel</button>
            <button id="update-input" class="update-user waves-effect waves-light btn">Update</button>
            </div>
        </div>
        <div class="row">
            <div class="col l6">
                    <div class="input-field col s12">
                        <input id="form-name" type="text" class="validate disabled" disabled>
                        <label class="active" for="form-name">name: </label>
                    </div>
                    <div class="input-field col s12">
                        <input id="form-pass" type="text" class="validate disabled" disabled>
                        <label class="active" for="form-pass">password: </label>
                    </div>
                    <div class="input-field col s12">
                        <input id="form-birth" type="text" class="datepicker disabled" disabled>
                        <label class="active" for="form-birth">birthday: </label>
                    </div>
            <div>sex:
                <p>
                <label>
                    <input name="sex" type="radio" id="male" class="with-gap disabled" disabled checked />
                    <span>male</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="sex" type="radio" id="female" class="with-gap disabled" disabled />
                    <span>female</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="sex" type="radio" id="other" class="with-gap disabled" disabled  />
                    <span>other</span>
                </label>
                </p>
    
            </div>
        </div> 
    </div>

    


    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/change_user_data.js"></script>
    <script src="js/logout.js"></script>
</body>

</html>