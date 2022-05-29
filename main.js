function setup()
    {
        canvas = createCanvas (1000, 1000);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
    }

    
    function draw()
    {
        image(video, 400, 300, 300, 300);
        circle(200, 200, 100);
        rect(160, 650, 100);
        circle(840, 200, 100);
        rect(790, 650, 100);
        rect(790, 676, -530, 50);
        rect(795, 178, -550, 50);
        circle(200, 450, 100);
        circle(840, 450, 100);


        
        circle().fill("blue")

        rect().fill("green")        
    }

    function take_snapshot()
    {
    save('something.png');
    }
        