$(".filterbtn").click(function(){
		  $("#filter").toggle();
		});



    	$(document).on("click",".filtericon",function() {


		    var listHtml;
		    listHtml = '<ul class="filter-options" style="">';
			listHtml += 	'<li><a class="filterLink" href="">CSS</li></a>';
			listHtml += 	'<li><a class="filterLink" href="">HTML</li></a>';
			listHtml += 	'<li><a class="filterLink" href="">js</li></a>';
			listHtml += 	'<li><a class="filterLink" href="">Misc</li></a>';
			listHtml += '</ul>';

			//if already available toggle view
			//if there is not available then append

			if($(this).parent('td').find('.filter-options').length  > 0){
				$(this).parent('td').find('.filter-options').toggle("fast");
			}else{
				$(this).parent('td').append(listHtml).hide().show('fast');
			}

            //$(".filter-options").not(this).hide("slow");
            //hide other list
            $(".filter-options").not($(this).parent('td').find('.filter-options')).hide("fast");


		});


		$(document).on("click",".filterLink",function(event) {
		    $('.filter-options').hide("fast");
		    event.preventDefault();

		});

        function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

		csv.push(row.join(","));
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.getElementById("exportBtn").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "export.csv");
});