export default `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>The HTML5 Herald</title>
    <meta name="description" content="The Portifólio" />
    <meta name="author" content="Bruno Alves" />
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  </head>

  <link rel="stylesheet" href="./style.css" />

  <body>
    <header>
      <img
        style="width:100;min-width:100%;max-height:200px;"
        src="http://cdn.mcauto-images-production.sendgrid.net/1ae2a76bc441a795/70063c40-8cee-476d-8d00-127f1817947a/275x183.jpg"
        alt=""
      />
    </header>
    <main>
      <h1 class="title">{{title}}</h1>

      <p class="message">{{message}}</p>

      <p>
        Atenciosamente, <a href="mailto:{{email}}">{{name}}</a>
      </p>
    </main>
    <footer></footer>
  </body>
</html>
`;
