import React from 'react';

import Typewriter from 'typewriter-effect';

function PersonalInfo() {
  return (
    <div className="personal-info">
      <Typewriter
        onInit={typewriter => {
          typewriter.changeDelay(30)
            .typeString("<p class='name'>I'M SIMON WATHIGO KINUTHIA</p>")
            .typeString(
              "<b>Looking for opportunities as a:</b> <p class='role'>FULL STACK WEB DEVELOPER</p>"
            )
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
            .typeString('<a class="icons" href="https://linkedin.com/in/simon-wathigo-445370183"><i class="fab fa-linkedin-in"></i></a>')
            .typeString('<a class="icons" href="https://github.com/wathigo"><i class="fab fa-github"></i></a>')
            .typeString('<a class="icons" href="https://twitter.com/simon_wathigo"><i class="fab fa-twitter"></i></a>')
            .start();
        }}
      />
    </div>
  );
}

export default PersonalInfo;
