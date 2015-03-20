function initAPI() {
gapi.client.setApiKey("AIzaSyDxiIcu6wt5FNilgEhepNgepCsFOl9b3yk");
gapi.client.load("youtube", "v3", function() {
});
}
function apiclass(){
    this.search=function seacrh(query){
    try
	{
	 var request = gapi.client.youtube.search.list({
     q:query,
     part: 'snippet',
     type: 'video',
	 maxResults: 10
     });
     request.execute(function(response) {
     var str = response.result;
      $("#searchcontainer").html("");
	  $.each(str.items,function(index,item){
	    $("#searchcontainer").append("<h4 style=font-size:20px;>"+item.snippet.title+"</h4><iframe class=video w100  width=500 height=300  src=https://www.youtube.com/embed/"+item.id.videoId+" frameborder=0 allowfullscreen></iframe>");
      });
	  if(!$("#searchcontainer").children().length)
		  $("#searchcontainer").html("Sorry No Results Found");
      });
	}
	catch(err){
	   alert(err);
	}
  }
}
$(document).ready(function(){
	  $.ajax({
	     type:"GET",
	     url:"request.php",
	     success: function(data){
		try{	 
		  var arr=JSON.parse(data);
		  $.each(arr[0].trends,function(index,order){
		  $("#list").append("<li style=list-style:none;color:blue;font-size:20px; onclick=searchobj.search(this.innerHTML)>"+order.name+"</li><br>");
		   });
		  } 
		 catch(err){
			 alert(err);
		 }
		 }
	    
	 });
	
});
