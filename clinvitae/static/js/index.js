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

    var listHtml;
    listHtml = '<ul class="filter-options" style="">';
    listHtml += 	'<li><a class="filterLink" href="">BRCC3</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">BRCA1</a></li>';
    listHtml += '</ul>';
    $('.gene-filter').find('span').append(listHtml);
    $('.gene-filter').find('ul').hide();
    $('.gene-filter').find('span').show();

    var listHtml2;
    listHtml2 = '<ul class="filter-options" style="">';
    listHtml2 += 	'<li><a class="filterLink" href="">Likely benign</a></li>';
    listHtml2 += 	'<li><a class="filterLink" href="">Variant of uncertain significance</a></li>';
    listHtml2 += '</ul>';
    $('.reported-filter').find('span').append(listHtml2);
    $('.reported-filter').find('ul').hide();
    $('.reported-filter').find('span').show();

    $(".filterbtn").click(function(){
	    $("#filter").toggle();
	});

    $('.gene-filter').find('.filtericon').click(function() {

        if($(this).parent('td').find('.filter-options').length  > 0){
            $(this).parent('td').find('.filter-options').toggle("fast");
        }
        $(".filter-options").not($(this).parent('td').find('.filter-options')).hide("fast");

    });

    $('.reported-filter').find('.filtericon').click(function() {

        if($(this).parent('td').find('.filter-options').length  > 0){
            $(this).parent('td').find('.filter-options').toggle("fast");
        }
        $(".filter-options").not($(this).parent('td').find('.filter-options')).hide("fast");

    });


    $(document).on("click",".filterLink",function(event) {
        var selectedValue = $(this).text();
        $(this).closest('td').find('input').val(selectedValue);
        $('.filter-options').hide("fast");
        event.preventDefault();
    });

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
    if($(this).hasClass('glyphicon-triangle-top')) {
            $(this).addClass("glyphicon-triangle-bottom");
            $(this).removeClass("glyphicon-triangle-top");
    } else {
            $(this).removeClass("glyphicon-triangle-bottom");
            $(this).addClass("glyphicon-triangle-top");
    }
});

function hideRowsFilter(className, filterValue) {
    $('#tableBody').find('tr').each(function() {
        if($(this).find(className).text().trim() != filterValue) {
            $(this).hide();
        }
    });
}

function hideRowsWhenDrag(className) {
    $('#tableBody').find('tr').each(function() {
        if($(this).find(className).text().trim().length == 0) {
            $(this).hide();
        }
    });
}

});