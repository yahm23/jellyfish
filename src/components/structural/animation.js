import React, { Component } from 'react'

const Animation = () => {
    
var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
// console.log(pathLength);

function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset); 
}

function onScroll(){
    requestAnimationFrame(function(){
      var rect = textContainer.getBoundingClientRect();
      var scrollPercent = rect.y / window.innerHeight;
      console.log(scrollPercent);
      updateTextPathOffset( scrollPercent * 2 * pathLength );
    });
  }
  
window.addEventListener('scroll',onScroll);

updateTextPathOffset(pathLength);
    return (
        <div>
            <svg id="text-container" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
                <path id="text-curve" d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0" fill="none"/>
                
                <text y="40" font-size="32">
                    <textPath id="text-path" href="#text-curve" startOffset="200">
                    * Keyframers really know animation.
                    </textPath>
                </text>
            </svg>
        </div>
    )
}

export default Animation
