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

    /*var listHtml;
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
    $('.reported-filter').find('span').show();*/

    $('span').show();
    $("#filter").toggle();
    $(".filterbtn").click(function(){
	    $("#filter").toggle();
	});
    $('.filtericon').click(function() {

        var selectedValue = $(this).closest('td').find('input').val();
        var className = '';
        if($(this).closest('td').hasClass('gene-filter')) {
            className = '.gene-data';
        } else if($(this).closest('td').hasClass('reported-filter')) {
            className = '.reported-data';
        }
        if(selectedValue != null && selectedValue.trim().length  > 0){

            hideRowsFilter(className, selectedValue.trim());
        } else {
            showHidedRows(className);
        }
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();
    $(this).find('i').show();
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

    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();
	$(".evaluated-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".info-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();

    $(this).find('i').show();
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

    $(".nucleotide-head").find('i').hide();
    $(".protein-head").find('i').hide();
    $(".region-head").find('i').hide();
    $(".reported-head").find('i').hide();
    $(".evaluated-head").find('i').hide();
    $(".updated-head").find('i').hide();
    $(".gene-head").find('i').hide();
    $(".alias-head").find('i').hide();
    $(".info-head").find('i').hide();

    $(this).find('i').show();
});

$(".theading").find('i').click(function() {
        if($('.theading').find('th').hasClass('region-head') && $(this).hasClass('glyphicon-triangle-top')) {
                $(this).removeClass("glyphicon-triangle-top");
                $(this).addClass("glyphicon-triangle-bottom");
                hideRowsWhenDrag('.region-data');
        } else if($('.theading').find('th').hasClass('region-head')) {
                $(this).removeClass("glyphicon-triangle-bottom");
                $(this).addClass("glyphicon-triangle-top");
                showRowsWhenDrag('.region-data');
        }
    });

function hideRowsFilter(className, filterValue) {
    $('#tableBody').find('tr').each(function() {
        if($(this).find(className).text().trim() != filterValue) {
            $(this).hide();
        }
    });
    $('#tableBody').find('tr:hidden').each(function() {
        if($(this).find(className).text().trim() == filterValue) {
            $(this).show();
        }
    });
}

function hideRowsWhenDrag(className) {
    $('#tableBody').find('tr').each(function() {
        if($(this).find(className).text().trim() == '-') {
            $(this).hide();
        }
    });
}

function showRowsWhenDrag(className) {
    $('#tableBody').find('tr').each(function() {
        if($(this).find(className).text().trim() == '-') {
            $(this).show();
        }
    });
}

function showHidedRows(className) {
    $(className).closest("tr:hidden").show();
}

});