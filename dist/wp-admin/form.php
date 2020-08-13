<?php
//echo 'in form';
//print_r($_POST);
$mark = true;
foreach ($_POST as $key=>$item){
    $checkArray = ['name','tel','message','time'];
    if($key!='action') {
        if(($key=='name' && empty($item)) || ($key=='tel' && empty($item))) {
            $mark = false;
            break;
        }else{
            $mark = true;
        }

    }

}
if($mark==true){
    echo json_encode('done');
}else{
    echo json_encode('fail');
}