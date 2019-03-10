    $(document).ready(function(){
            var no = document.getElementById("blogs")
            var parser = new DOMParser();
            $.ajax({
                context: this,
                dataType : "html",
                url : document.baseURI.replace("index.html","blog.html"),
                success : function(results) {
                    

                    for (let index = 1; index < parser.parseFromString(results, 'text/html').all.length; index++) {
                        
                        const element = parser.parseFromString(results, 'text/html').all.item(index);
                        
                        for (let elements = 0; elements < element.getElementsByTagName("h1").length; elements++) {
                            
                            if(element.getElementsByTagName("h1").length!=0){
                                no.innerHTML+="<h4>"+element.getElementsByTagName("h1").item(elements).innerHTML+"</h4>"
                                no.innerHTML+="<p>"+(element.getElementsByTagName("p").item(elements).innerHTML)+"</p>"
                            }
                        }
                    }
                }
            });
      
        });  