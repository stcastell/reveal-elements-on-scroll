let RevealElementsOnScroll = {

    /*Made by @stcastell.*/

    /*This module will help you to animate elements on scroll in many ways. Requires to place the element into a container. You may want to set your container's position to relative if its width is less than 100%*/

    LeftToCenter: (className, referenceClass) => {
        const reference = document.getElementsByClassName(referenceClass)[0]
        reference.addEventListener("scroll", function () {
            var screen = window.innerHeight;
            var hidden = document.getElementsByClassName(className);
            for (var i = 0; i < hidden.length; i++) {
                hidden[i].style.transition = '1000ms ease-out'
                hidden[i].style.position = 'absolute'
                hidden[i].style.transitionProperty = "right, opacity, transform"
                var distance = hidden[i].getBoundingClientRect().top;
                if (distance < screen) {
                    hidden[i].style.right = "50%"
                    hidden[i].style.transform = "translateX(50%)"
                    hidden[i].style.opacity = 1
                } else {
                    hidden[i].style.right = "100%"
                    hidden[i].style.opacity = 0
                }
            }
        });
    },
}
export default RevealElementsOnScroll