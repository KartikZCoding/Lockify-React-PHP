<?php

$obj = new mysqli("localhost", "root", "", "lockify");

if ($obj->connect_error != 0) {
    echo $obj->connect_error;
    exit;
}
