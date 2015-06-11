<?PHP

echo "hiiiiiiiiii";
exit;
$localhost = 'localhost'; //name of server. Usually localhost
$database = 'hir.al'; //database name.
$username = 'root'; //database username.
$password = ''; //database password.

// connect to db  
$conn = mysql_connect($localhost, $username, $password) or die('Error connecting to mysql');   
$db = mysql_select_db($database,$conn) or die('Unable to select database!');
?>
