let myScript = () => {

  console.log("hola desde myScript ;)");

  // Referencias al HTML
  const banner = document.getElementsByClassName("banner")[0];

  const blocks = document.getElementsByClassName("blocks");


  console.log(banner);
  console.log(blocks);
  console.log(flag)


   for (var i = 1; i < 400; i++) {

    banner.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay = `${i * 0.05}s`;

   }

}
