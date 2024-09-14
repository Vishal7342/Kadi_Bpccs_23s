<?php
session_start();
$aid = $_SESSION['id'];
$ret = "SELECT * FROM userlog WHERE userId=?";

$stmt = $mysqli->prepare($ret);
$stmt->bind_param('i', $aid);
$stmt->execute();
$res = $stmt->get_result();

$data = [];
while ($row = $res->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
