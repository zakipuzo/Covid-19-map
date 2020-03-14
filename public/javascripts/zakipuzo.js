$(document).ready(function() {
		
        $.ajax({
            url: "/zakipuzo",
            type: 'GET',
    		
            success: function(result) {

            	console.log(JSON.parse(result));
                var casesbycont=JSON.parse(result);

                $(".countries").text(casesbycont.countries_stat.length+" countries");

                $.each(casesbycont.countries_stat, function(index, val) {
                  
                      
                        $(".results").append("<tr><td>"
                            +val.country_name+"</td'><td>"

                            +val.cases+"</td><td>"+val.deaths+"</td><td>"+val.total_recovered
                            +"</td>");
                        

                });

                $(".loading").hide();


            }
        });
	});