function header(){
    return `
        <div class="container">
            <div class="row">
                <div class="page2-title-container" style="margin-top: 200px">
                    <div class="page2-title">
                        Kirkland Jaxon
                    </div>
                </div>
                ${song()}
            </div>
        </div>
    `
}

function song(){
    return `
        <div>
            <img src="assets/img/in_moe_slow.png" alt="Raised Image" class="img-raised rounded page2-image" width="300px">
            <p class="page4-title">In Slow Motion</p>
        </div>
    `
}

function streaming_links(request){
    return `
        <div class="row">
            <h3>
                <a href="https://music.apple.com/us/album/in-slow-motion-single/1522558130" target="_blank">
                    <i class="fa fa-apple fa-2x site-icon" aria-hidden="true" style="margin: 0 12px"></i>
                </a>

                <a href="https://open.spotify.com/album/0WZZH1WbCQsS3H9B9t9SNR" target="_blank">
                    <i class="fa fa-spotify fa-2x site-icon" aria-hidden="true" style="margin: 0 12px"></i> 
                </a>

                <a href="https://youtu.be/8ZU52Kvo6Z8" target="_blank">
                    <i class="fa fa-youtube fa-2x site-icon" aria-hidden="true" style="margin: 0 12px"></i> 
                </a>

                <a href="https://soundcloud.com/jaxonraps/sets/mydestino" target="_blank">
                    <i class="fa fa-soundcloud fa-2x site-icon" aria-hidden="true"></i> 
                </a>
            </h3>
        </div>
    `
}

function spotify(){
    return `
        <div>
            <iframe
                src="https://open.spotify.com/follow/1/?uri=spotify:artist:1fkZDaZZwW8Bzi3MfDQTYF?si=r1MrZ5MhQrygxZs5ODpQDg&size=detail&theme=dark"
                width="250"
                height="56"
                scrolling="no"
                frameborder="0"
                style="border:none; overflow:hidden;"
                allowtransparency="true"
            ></iframe>
        </div>
    `
}

function openForm(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("form-black-out").style.opacity = .75;
    document.getElementById("form-black-out").style.display = "block";
}
  
function closeForm(){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("form-black-out").style.display = "none";
    document.getElementById("form-black-out").style.opacity = 0;
}

function form(){
    return `
        <button class="subscribe-button" onclick="openForm()">
            <p class="text">
                Subscribe
            </p>
        </button>



        <div class="form-popup" id="myForm">

            <h1>Subscribe</h1>
            <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form
                                action="https://kirklandjaxon.us7.list-manage.com/subscribe/post?u=e1567b12b47b8c6e8b5bef2b5&amp;id=29f7f72ec1"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                class="validate"
                                target="_blank"
                                novalidate
                            >
                                <div id="mc_embed_signup_scroll">
                                    <div class="mc-field-group">
                                        <input class="form-control email" placeholder="name" type="text" value="" autocomplete="name" name="NAME" class="required" id="mce-NAME" required>
                                    </div>
            
                                    <div class="mc-field-group">
                                        <input class="form-control email" placeholder="email" type="text" value="" autocomplete="email" name="EMAIL" class="required" id="mce-EMAIL" required>
                                    </div>
            
                                    <div class="mc-field-group">
                                        <input class="form-control email" placeholder="city" type="text" value="" autocomplete="city" name="CITY" class="required" id="mce-CITY" required>
                                    </div>
            
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                            
                                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e1567b12b47b8c6e8b5bef2b5_29f7f72ec1" tabindex="-1" value=""></div>
                                    <div class="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button btn btn-primary">
                                        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
                                    <title>Path</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <path d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z" id="Path" fill="#F9BC35"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}



function background(page){
    let url = ""
    switch (page) {
        case "hell_on_earth":
            url = './assets/img/hoe.jpg'
            break;
    
        default:
            break;
    }

    return `
        <div class="page-header" data-parallax="true" id="page-header">
            <div class="col-xs-12 ml-auto mr-auto">                
                ${header()}
                
                ${streaming_links()}

                <div class="social-links">
                    ${spotify()}
                    ${form()}
                </div>

                <div class="row">
                    <img class="img-fluid" src="assets/img/jaxon_logo_white.png"  style="width: 50px; margin-top: 35px;"/>
                </div>
            </div>
        </div>
    `
}

document.getElementById("hell_on_earth").innerHTML = background("hell_on_earth");