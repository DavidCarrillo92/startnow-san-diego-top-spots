$(document).ready(function() {
       $.getJSON('data.json', function(data) {
             $.each(data, function(key, value) {
                 var linkButton = "<a href=https://www.google.com/maps?q=" + value.location + "><button>Open in Google Maps</button></a>";
                 var tblRow = "<tr> <td>" + value.name + "</td><td>" + value.description + "</td> <td>" +  linkButton + "</td> </tr>"
                    $('#t-body').append(tblRow);
     });
   });
});


    

