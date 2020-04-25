<?php
if($_GET['do']=='yes')
{
    $time = base64_decode($_GET['time']);
    system("sudo shutdown -h +".trim($time));
}
else
{
    system("sudo shutdown -c");
}

?>