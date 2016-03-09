<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <title>why</title>
    </head>
    <body>
        <?php
        //nested for loop
        
        for ($row=10; $row>=0; $row--)
    {   
        
        for ($col=0; $col<$row; $col++)
    {   
        echo "*";

    }
    echo "<br>";    
    } 
    
    echo "<br>";
    
    // while loop
    
    $row2 = 10; 
       
       while ($row2 >= 0 )
       {
           $col2=1;
           while ($col2 <= $row2)
           { echo "*";
           $col2++;
           
           
           }
           
           
           
       echo "<br>";
       $row2--;
       }
       
       echo "<br>";
       
       
       
       //do-while loop

        $row3=9; 

        do 
        { 
            $col3=0;
            do {
                echo "*";
                $col3++;
            }
            
            while ($col3<=$row3);
        $row3--;
        echo "<br>";
        } 
        while ($row3>=0);
        ?>
    </body>
</html>
