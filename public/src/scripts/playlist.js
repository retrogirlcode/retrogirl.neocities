const text = document.querySelector(".text")
const link = document.querySelector(".link")
const img = document.querySelector(".img")

function show( index){

    switch(index){
        case (1):
            text.innerHTML = `
                <div class="inside">
                    <p>Songs where I feel like I'm a jellyfish underwater</p>
                    <ol>
                        <li>Underwater - Chuu</li>
                        <li>Yume Utsutsu - Lamp</li>
                        <li>Hatachi No Koi - Lamp</li>
                        <li>Cool With You - New Jeans</li>
                        <li>Get Up - New Jeans</li>
                        <li>Movies - Weyes Blood</li>
                        <li>TicTac - Capsule</li>
                        <li>Dorothy - Sulli</li>
                        <li>Goblin - Sulli</li>
                        <li>Sing - Slowdive</li>
                        <li>Pipo Pipo - Serani Poji</li>
                        <li>tinkerbell is overrated feat. PinkPantheress - Beabadoobee</li>
                    </ol>
                </div>
            `
            link.innerHTML = `


           <iframe width="100%" height="300px" src="https://www.youtube.com/embed/videoseries?si=jL9RtDVsiV3YX7nx&amp;list=PLZoaSVF3EZTZdV1yMH6QlIkXEFYTeGozH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `
            img.innerHTML = `
    
        <img src="src/img/jelly.jpg" alt="">
            `
            break
        case(2):
        
    }
    text.style.display = "block"
    link.style.display = "block"
    img.style.display = "block"
    

}