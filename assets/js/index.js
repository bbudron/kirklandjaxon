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
        <div class="modal fade" id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog form-dark" role="document">
            <!--Content-->
            <div class="modal-content card card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg');">
            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <!--Header-->
                <div class="modal-header text-center pb-4">
                <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
                    class="green-text font-weight-bold"><strong> UP</strong></a></h3>
                <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <!--Body-->
                <div class="modal-body">
                <!--Body-->
                <div class="md-form mb-5">
                    <input type="email" id="Form-email5" class="form-control validate white-text">
                    <label data-error="wrong" data-success="right" for="Form-email5">Your email</label>
                </div>

                <div class="md-form pb-3">
                    <input type="password" id="Form-pass5" class="form-control validate white-text">
                    <label data-error="wrong" data-success="right" for="Form-pass5">Your password</label>
                    <div class="form-group mt-4">
                    <input class="form-check-input" type="checkbox" id="checkbox624">
                    <label for="checkbox624" class="white-text form-check-label">Accept the<a href="#" class="green-text font-weight-bold">
                        Terms and Conditions</a></label>
                    </div>
                </div>

                <!--Grid row-->
                <div class="row d-flex align-items-center mb-4">

                    <!--Grid column-->
                    <div class="text-center mb-3 col-md-12">
                    <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1">Sign up</button>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">
                    <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold">
                        Log in</a></p>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                </div>
            </div>
            </div>
            <!--/.Content-->
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
        <div class="page-header" data-parallax="true">
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