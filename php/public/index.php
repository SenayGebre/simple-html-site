<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['query'])) {
        $query = $_GET['query'];
        $url = 'https://jsonplaceholder.typicode.com/comments';
        $response = file_get_contents($url);
        $data = json_decode($response, true);
        echo json_encode($data);
    } else {
        http_response_code(400);
        echo json_encode(array("error" => "Query parameter missing"));
    }
} else {
    http_response_code(405);
    echo json_encode(array("error" => "Method not allowed"));
}
?>
