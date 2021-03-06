function html(card){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <div class="p-2 mb-4 rounded-3 bg-danger text-light text-center">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">My Team</h1>

        </div>
    </div>

    <div class="container">
        <div class="row">

         ${card}

        </div>

        </body>
        
        </html>
    `
}
module.exports = html