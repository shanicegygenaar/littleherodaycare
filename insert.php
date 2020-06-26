<?php
$connect = mysql_connect("server_name", "name", "dob", "email", "phone");
if(!connect) {
	die('Connection failed:' .mysql_error()); {
		mysql_select_db("clients", $connect);
	}
}
?>