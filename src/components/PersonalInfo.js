import React from 'react';

import Typewriter from 'typewriter-effect';

function PersonalInfo() {
  return (
    <div className="personal-info">
      <Typewriter
        onInit={typewriter => {
          typewriter.changeDelay(30)
            .typeString("<h1 class='name'>I'M SIMON WATHIGO KINUTHIA</h1>")
            .pauseFor(500)
            .typeString(
              '<b>Looking for opportunities as a:</b>',
            )
            .typeString("<h5 class='role'>FULL STACK WEB DEVELOPER</h5>")
            .typeString("<h5 class='role'>REACT/JAVASCRIPT DEVELOPER</h5>")
            .typeString("<h5 class='last-role'>RUBY DEVELOPER</h5>")
            .pauseFor(1000)
            .changeDelay(5)
            .start();
          typewriter.typeString(
            '<b>Location:</b> <p>Nairobi, Kenya</p>',
          )
            .pauseFor(1000)
            .start();

          typewriter.typeString('<b>Contact Information:</b>')
            .typeString('<p class="mail">Email: wathigosimon@gmail.com </p>')
            .typeString('<a class="icons" target="_blank" href="https://linkedin.com/in/simon-wathigo-445370183"><i class="fab fa-linkedin-in"></i></a>')
            .typeString('<a class="icons" target="_blank" href="https://github.com/wathigo"><i class="fab fa-github"></i></a>')
            .typeString('<a class="icons" target="_blank" href="https://twitter.com/simon_wathigo"><i class="fab fa-twitter"></i></a>')
            .start();
        }}
      />
    </div>
  );
}

export default PersonalInfo;
