
    $(document).ready(function(){

        let inputColor = $("#colorPicker").val();

        //color block function.
        $("#pixel_canvas").on("click", "td" ,function(){
            inputColor = $("#colorPicker").val();
            $(this).css("background-color", inputColor);

        });

        //make grid function.
        $( "#sizePicker" ).submit(function makeGrid(event) {        
            event.preventDefault();     
            const inputHeight = $("#input_height").val();
            const inputWidth = $("#input_width").val();

            //empty canvas table
            $("#pixel_canvas").empty();
            
            let table = "";

            for(let i = 0 ; i < inputHeight; i++){            
                
                table += "<tr>";
                
                //inner loop
                let innerCount = 0;
                
                while(innerCount < inputWidth){
                    table += "<td></td>";
                    innerCount++;
                }

                table += "</tr>";
            }

            //append table string to canvas table.
            $("#pixel_canvas").append(table);

        });//end makeGrid function    

    });//end document ready function
