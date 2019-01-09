    function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];

	$('table').find('tr').each(function() {
	    var row = [];
	    var td_text = '';
	    if(!$(this).is(":hidden") && !$(this).is('#filter')) {
	        $(this).find('th').each(function() {
	            row.push($(this).text().trim());
	            console.log($(this).text().trim());
	        });
	        $(this).find('td').each(function() {
	            if($(this).find('div').hasClass('panel-heading')){
	                td_text = $(this).find('.panel-heading>span').text().trim() + ' ' + $(this).find('.panel-collapse > .panel-body').text().trim();
	            } else if($(this).find('a').length) {
	                td_text = $(this).find('a').attr('href').trim();
	            } else {
	                td_text = $(this).text().trim();
	            }
	            row.push(td_text);
	        });
	        csv.push(row.join(","));
	    }
	});
    download_csv(csv.join("\n"), filename);
}

document.getElementById("exportBtn").addEventListener("click", function () {
    var html = document.querySelector("table").outerHTML;
	export_table_to_csv(html, "export.csv");
});

$(document).ready(function() {

    var listHtml;
    listHtml = '<ul class="filter-options dropdown-menu" style="">';
    listHtml += 	'<li><a class="filterLink" href="">No filter</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Contains</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Does not contains</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Starts with</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Ends with</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Equal to</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Not equal to</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Greater than</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Less than</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Greater than or equal to</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Less than or equal to</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Is empty</a></li>';
    listHtml += 	'<li><a class="filterLink" href="">Not is empty</a></li>';
    listHtml += '</ul>';
    $('#filter').find('span').append(listHtml);
    $('#filter').find('ul').hide();
    $("#filter").toggle();

    $('.theading, #filter td > span > input, #tableBody').click(function() {
         $(".filter-options").hide("fast");
    });

    $(".filterbtn").click(function(){
	    $("#filter").toggle();
	    $(".filter-options").hide("fast");
	});

    $('.filtericon').click(function() {
        var span_width = $(this).closest('td').find('span').width();
        $(".filter-options").css({"transform":"translate(" + span_width + "px,0px)"});
        if($(this).parent('td').find('.filter-options').length  > 0){
            $(this).parent('td').find('.filter-options').toggle("fast");
        }
        $(".filter-options").not($(this).parent('td').find('.filter-options')).hide("fast");
    });

    $('.filter-options').find('li').click(function(e) {

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
        $(this).closest('.filter-options').hide();
        e.preventDefault();
    });

    $('#resetBtn').click(function() {
        $('#filter').find('input').val('');
        $('#tableBody').find("tr:hidden").show();
        $('#filter').find('td').css({"background-color": ""});
        $(".filter-options").hide("fast");
        $('#tableBody').find('td').css({"background-color": ""});

        if($(".theading").find('i').hasClass('glyphicon-triangle-bottom')) {
                $(".theading").find('i').removeClass("glyphicon-triangle-bottom");
                $(".theading").find('i').addClass("glyphicon-triangle-top");
                $(".theading").find('i').hide();
        }

    });

    $( window ).resize(function() {
        $('#filter').find('td').each(function() {
            if(!$(this).find('ul:hidden').length) {
                var span_width = $(this).find('span').width();
                $(this).find('.filter-options').css({"transform":"translate(" + span_width + "px,0px)"});
            }
        });
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