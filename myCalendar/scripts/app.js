var isItImportant = false; //flag
var detailsVisible = true;
var DetailsShowButton = true;


function toggleImportant() {
    if (isItImportant) {
        $("#iconImp").removeClass('fas').addClass('far');
        isItImportant = false;
    }
    else {
        $("#iconImp").removeClass('far').addClass('fas');
        isItImportant = true;
    }
}
function toggleDetails() {
    if (detailsVisible) {
        $("#secForm").hide();
        detailsVisible = false;

    }
    else {
        $("#secForm").show();
        detailsVisible = true;

    }
}
$("#btnShowDetails").click(function (e) {
    detailsButtonShow = $(this).text()
    if (detailsButtonShow == "Hide Details") {
        $(this).text("Show Details").removeClass('far fa-eye-slash').addClass('fas fa-eye')
    }
     else {
         $(this).text('Hide Details').addClass('far fa-eye-slash')
     }   
    

    
        
            
            
        });





        function createTask() {

            //get values from input
            var title = $("#txtTitle").val();
            var dueDate = $("#txtDate").val();
            var desc = $("#taskDescription").val();
            var location = $("#txtLocation").val();

            // apply validations
            if (title.length < 5) {
                $("#alertError").show();
                // show the lert panel
                // start a time to hide it
                //arrow function java6 latest update
                setTimeout(() => $("#alertError").hide(), 4000);
                return; // as soon as Java hit the return it stops and it won't continue
            }


            //create an object
            var task = new Task(title, isItImportant, dueDate, desc, location);
            // send object to server
            console.log(task);


            // display task

            displayTask(task);

        }
        function displayTask(task) {// this task contains title etc...

            var syntax =
                `<div class='task'>
    <i id="iconstar" class=<i "far fa-star task-star"></i>
    <div class='task-section'>
        <h5> ${task.title}</h5>
        <label>${task.description}</label>
        <label class='task-section'>${task.dueDate}</label>
        <label class='task-section'>${task.location}</label>
    </div>`;


            $("#pendingTasks").append(syntax);




        }







        function init() {
            console.log("My Calendar");

            toggleDetails();


            // load date

            // hook events
            $("#iconImp").click(toggleImportant);
            $("#btnShowDetails").click(toggleDetails);
            $("#btnSave").click(createTask)

            $("#alertError").hide();
        }
        window.onload = init;
/**
 *
 * hide alertError when page loads
 * show it when there is an error
 */