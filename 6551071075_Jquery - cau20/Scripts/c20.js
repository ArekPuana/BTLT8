$(document).ready(function() {
            const slideWidth = 220; 
            const totalSlides = $(".slides img").length;
            let currentIndex = 0;

            function moveSlide(index) {
                $(".slides").css("transform", `translateX(-${index * slideWidth}px)`);
            }

            //right arrow
            $(".next").click(function() {
                currentIndex++;
                if (currentIndex > totalSlides - 5) currentIndex = 0;
                moveSlide(currentIndex);
            });

            //left arrow
            $(".prev").click(function() {
                currentIndex--;
                if (currentIndex < 0) currentIndex = totalSlides - 5;
                moveSlide(currentIndex);
            });

            //auto slide
            setInterval(function() {
                currentIndex++;
                if (currentIndex > totalSlides - 5) currentIndex = 0;
                moveSlide(currentIndex);
            }, 3000);
        });