<!-- VALIDATING AND STORING IN DATABASE -->

<?php
$err="";
$err1="";
$err2="";
    if(isset($_POST["final"])){
        if((empty($_POST["initial"])) and basename(($_FILES["imagee"]["name"]==""))){
            $err2="* Please Enter The Picture Details.";
        }
        else if(empty($_POST["initial"])){
            $err="* Please Enter The Picture Name.";
        }
        else if(basename($_FILES["imagee"]["name"]=="")){
            $err1="* Please Upload The Picture.";
        }
        else{
            $link = mysqli_connect("localhost", "root", "", "gallery1");
        
            $initial=$_POST["initial"];
            $target_dir = "uploads/";
            $date=date('d-m-Y');
            $date = str_replace('-', '/', $date);  
            $target_file = $target_dir . basename($_FILES["imagee"]["name"]);
            move_uploaded_file($_FILES["imagee"]["tmp_name"], $target_file);
    
            $sql = "INSERT INTO pictures (Picture, Uploads, Date) VALUES ('$initial','$target_file','$date')";
            mysqli_query($link, $sql);
            mysqli_close($link);
        }
    }
?>

<!-- **************************************************************************** -->


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1 class="heading1">ADD TO YOUR VIRTUAL GALLERY</h1>

    <!-- FORM FOR PICTURE INPUT -->

    <div class="divform">
        <form class="form1" method="post" action="#" enctype="multipart/form-data">

        <span class="error"><?php echo $err;?></span>
        <span class="error"><?php echo $err1;?></span>
        <br> <span class="error"><?php echo $err2;?></span>
            <div class='initial'>
                <br> <br>
                <label id="picname">Enter the Picture Name<span class="req">*</span></label>
                <input name="initial" type="text" placeholder="Picture Name" /> <br> <br>
            </div>

            <div class='upload'>
                <label id="picupload">Please Upload the Picture<span class="req">*</span></label>
                <input style="background-color:rgb(153, 118, 153);" type="file" name="imagee" class="imagee" id="imagee" accept="image/*"/> <br> <br>
            </div>

            <div class='final'>
                <br> <button type="submit" name="final" class="subbutton"/>ADD</button> <br> <br>
            </div>

        </form>
    </div>

    <!-- **************************************************************************** -->


    <!-- SEARCH BARS -->

    <br> <br> 
    <h1 class="heading1">SEARCH THROUGH YOUR VIRTUAL GALLERY</h1>

    <h3 class="heading2" id="hidee1">SEARCH VIA PICTURE NAME</h1>
    <div class="divpic">
        <input type="text" id="myInput1" onkeyup="search_name()" placeholder="Search For Pictures" title="Type in a Picture Name">
    </div>

    <div id="mehnat2">
        <div id="mehnat" class="mehnat">
        </div>
    </div>

    <h3 class="heading2" id="hidee2">SEARCH VIA PICTURE DATE</h1>
    <div class="divpic">
        <input type="date" id="myInput2" onkeyup="search_date()" placeholder="Search For Pictures" title="Type in a Date">
    </div>

    <div id="mehnat3">
        <div id="mehnat4">
        </div>
    </div>

    <!-- **************************************************************************** -->

    <!-- EXTRACTING RECORDS AND STORING IN HIDDEN TABLE -->

    <div id="searching">
        <?php
        $link = mysqli_connect("localhost", "root", "", "gallery1");
        $sql = "SELECT * FROM pictures";
        $results = mysqli_query($link, $sql);
        $Rows = array();

        while($row = mysqli_fetch_array($results)){
            $Rows [] = $row;
        }
        ?>

        <article>
            <table id="table1" style="margin-left:200px" hidden="hidden">
                <tr>
                    <th>Picture</th>
                    <th>Uploads</th>
                    <th>Date</th>
                </tr>

        <?php
        foreach($Rows as $row){
        ?>
                <tr>
                    <td><?php echo $row['Picture']?></td>
                    <td><?php echo $row['Uploads']?></td>
                    <td><?php echo $row['Date']?></td>
                </tr>
        <?php
        }
        ?>
            </table>
        </article>
        <?php
        mysqli_close($link);
        ?>
    </div>

    <div id="check">
        <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script type="text/javascript" src=script.js></script>

</body>

<!-- **************************************************************************** -->