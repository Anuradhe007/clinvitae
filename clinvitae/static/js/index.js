$(".filterbtn").click(function(){
		  $("#filter").toggle();
		});



    	$(document).on("click",".filtericon",function() {


		    var listHtml;
		    listHtml = '<ul class="filter-options" style="">';
			listHtml += 	'<li><a class="filterLink" href="">BRCC3</a></li>';
			listHtml += 	'<li><a class="filterLink" href="">BRCA1</a></li>';
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

        $('.gene-filter').find('a').click(function() {
            console.log('a');
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

$(document).ready(function() {
//#71daad96;
$('.gene-head').click(function() {
    $(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.nucleotide-head').click(function() {
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".nucleotide-data, .nucleotide-filter").css({"background-color": "#71daad96"});

    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.protein-head').click(function() {
    $(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.alias-head').click(function() {
    $(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.region-head').click(function() {
$(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.reported-head').click(function() {
$(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
	$(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.evaluated-head').click(function() {
$(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.updated-head').click(function() {
$(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$('.info-head').click(function() {
    $(".nucleotide-data, .nucleotide-filter").css({"background-color": ""});
    $(".protein-data, .protein-filter").css({"background-color": ""});
    $(".region-data, .region-filter").css({"background-color": ""});
    $(".reported-data, .reported-filter").css({"background-color": ""});
    $(".evaluated-data, .evaluated-filter").css({"background-color": ""});
    $(".updated-data, .updated-filter").css({"background-color": ""});
    $(".gene-data, .gene-filter").css({"background-color": ""});
    $(".alias-data, .alias-filter").css({"background-color": ""});
    $(".info-data, .info-filter").css({"background-color": "#71daad96"});

    $(".nucleotide-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".protein-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".region-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".reported-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".evaluated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".updated-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".gene-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".alias-head").find('i').removeClass("glyphicon glyphicon-triangle-top");
    $(".info-head").find('i').removeClass("glyphicon glyphicon-triangle-top");

    $(this).find('i').addClass("glyphicon glyphicon-triangle-top");
});

$(".gene-head").find('i').click(function() {
console.log('here');
    if($(this).hasClass('glyphicon-triangle-top')) {
    console.log('here1');
            $(this).addClass("glyphicon-triangle-bottom");
            $(this).removeClass("glyphicon-triangle-top");
    } else {
    console.log('here3');
            $(this).removeClass("glyphicon-triangle-bottom");
            $(this).addClass("glyphicon-triangle-top");
    }
});

});