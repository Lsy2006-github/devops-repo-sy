function cov_14e27zzdem(){var path="C:\\Users\\Liany\\OneDrive\\Documents\\GitHub\\devops-repo-sy\\public\\js\\justin-frontend.js";var hash="00b4b157bf9c79d2d8f4d4aa647acafad97544f3";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Liany\\OneDrive\\Documents\\GitHub\\devops-repo-sy\\public\\js\\justin-frontend.js",statementMap:{"0":{start:{line:2,column:19},end:{line:2,column:21}},"1":{start:{line:3,column:18},end:{line:3,column:38}},"2":{start:{line:4,column:4},end:{line:4,column:44}},"3":{start:{line:5,column:4},end:{line:5,column:65}},"4":{start:{line:6,column:4},end:{line:19,column:6}},"5":{start:{line:7,column:8},end:{line:7,column:52}},"6":{start:{line:8,column:19},end:{line:8,column:21}},"7":{start:{line:9,column:8},end:{line:17,column:9}},"8":{start:{line:9,column:21},end:{line:9,column:22}},"9":{start:{line:10,column:12},end:{line:16,column:29}},"10":{start:{line:18,column:8},end:{line:18,column:66}},"11":{start:{line:21,column:4},end:{line:21,column:19}}},fnMap:{"0":{name:"viewGame",decl:{start:{line:1,column:9},end:{line:1,column:17}},loc:{start:{line:1,column:20},end:{line:22,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:6,column:21},end:{line:6,column:22}},loc:{start:{line:6,column:33},end:{line:19,column:5}},line:6}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},f:{"0":0,"1":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"00b4b157bf9c79d2d8f4d4aa647acafad97544f3"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_14e27zzdem=function(){return actualCoverage;};}return actualCoverage;}cov_14e27zzdem();function viewGame(){cov_14e27zzdem().f[0]++;var response=(cov_14e27zzdem().s[0]++,'');var request=(cov_14e27zzdem().s[1]++,new XMLHttpRequest());cov_14e27zzdem().s[2]++;request.open('GET','/view-game',true);cov_14e27zzdem().s[3]++;request.setRequestHeader('Content-Type','application/json');cov_14e27zzdem().s[4]++;request.onload=function(){cov_14e27zzdem().f[1]++;cov_14e27zzdem().s[5]++;response=JSON.parse(request.responseText);var html=(cov_14e27zzdem().s[6]++,'');cov_14e27zzdem().s[7]++;for(var i=(cov_14e27zzdem().s[8]++,0);i<response.length;i++){cov_14e27zzdem().s[9]++;html+='<div class="product">'+'<img src="'+response[i].image+'" alt="'+response[i].name+'">'+'<div class="product-details">'+'<h2 class="product-title">'+response[i].name+'</h2>'+'<p class="product-price">$'+response[i].price+'</p>'+'</div>'+'</div>';}cov_14e27zzdem().s[10]++;document.getElementById('gameContainer').innerHTML=html;};cov_14e27zzdem().s[11]++;request.send();}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTRlMjd6emRlbSIsImFjdHVhbENvdmVyYWdlIiwidmlld0dhbWUiLCJmIiwicmVzcG9uc2UiLCJzIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJodG1sIiwiaSIsImxlbmd0aCIsImltYWdlIiwibmFtZSIsInByaWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInNlbmQiXSwic291cmNlcyI6WyJqdXN0aW4tZnJvbnRlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmlld0dhbWUoKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gJyc7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsICcvdmlldy1nYW1lJywgdHJ1ZSk7XG4gICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICB2YXIgaHRtbCA9ICcnXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzcmM9XCInICsgcmVzcG9uc2VbaV0uaW1hZ2UgKyAnXCIgYWx0PVwiJyArIHJlc3BvbnNlW2ldLm5hbWUgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInByb2R1Y3QtZGV0YWlsc1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aDIgY2xhc3M9XCJwcm9kdWN0LXRpdGxlXCI+JyArIHJlc3BvbnNlW2ldLm5hbWUgKyAnPC9oMj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHAgY2xhc3M9XCJwcm9kdWN0LXByaWNlXCI+JCcgKyByZXNwb25zZVtpXS5wcmljZSArICc8L3A+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ29udGFpbmVyJykuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5zZW5kKCk7XG59Il0sIm1hcHBpbmdzIjoiNnBEQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLFFBQVMsQ0FBQUUsUUFBUUEsQ0FBQSxDQUFHLENBQUFGLGNBQUEsR0FBQUcsQ0FBQSxNQUNoQixHQUFJLENBQUFDLFFBQVEsRUFBQUosY0FBQSxHQUFBSyxDQUFBLE1BQUcsRUFBRSxFQUNqQixHQUFJLENBQUFDLE9BQU8sRUFBQU4sY0FBQSxHQUFBSyxDQUFBLE1BQUcsR0FBSSxDQUFBRSxjQUFjLENBQUMsQ0FBQyxFQUFDUCxjQUFBLEdBQUFLLENBQUEsTUFDbkNDLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBRSxZQUFZLENBQUUsSUFBSSxDQUFDLENBQUNSLGNBQUEsR0FBQUssQ0FBQSxNQUN4Q0MsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUUsa0JBQWtCLENBQUMsQ0FBQ1QsY0FBQSxHQUFBSyxDQUFBLE1BQzdEQyxPQUFPLENBQUNJLE1BQU0sQ0FBRyxVQUFZLENBQUFWLGNBQUEsR0FBQUcsQ0FBQSxNQUFBSCxjQUFBLEdBQUFLLENBQUEsTUFDekJELFFBQVEsQ0FBR08sSUFBSSxDQUFDQyxLQUFLLENBQUNOLE9BQU8sQ0FBQ08sWUFBWSxDQUFDLENBQzNDLEdBQUksQ0FBQUMsSUFBSSxFQUFBZCxjQUFBLEdBQUFLLENBQUEsTUFBRyxFQUFFLEVBQUFMLGNBQUEsR0FBQUssQ0FBQSxNQUNiLElBQUssR0FBSSxDQUFBVSxDQUFDLEVBQUFmLGNBQUEsR0FBQUssQ0FBQSxNQUFHLENBQUMsRUFBRVUsQ0FBQyxDQUFHWCxRQUFRLENBQUNZLE1BQU0sQ0FBRUQsQ0FBQyxFQUFFLENBQUUsQ0FBQWYsY0FBQSxHQUFBSyxDQUFBLE1BQ3RDUyxJQUFJLEVBQUksdUJBQXVCLENBQ25CLFlBQVksQ0FBR1YsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxDQUFHLFNBQVMsQ0FBR2IsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxDQUFHLElBQUksQ0FDdEUsK0JBQStCLENBQzNCLDRCQUE0QixDQUFHZCxRQUFRLENBQUNXLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUcsT0FBTyxDQUN6RCw0QkFBNEIsQ0FBR2QsUUFBUSxDQUFDVyxDQUFDLENBQUMsQ0FBQ0ksS0FBSyxDQUFHLE1BQU0sQ0FDN0QsUUFBUSxDQUNaLFFBQVEsQ0FDcEIsQ0FBQ25CLGNBQUEsR0FBQUssQ0FBQSxPQUNEZSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxDQUFHUixJQUFJLENBQzdELENBQUMsQ0FBQ2QsY0FBQSxHQUFBSyxDQUFBLE9BRUZDLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQyxDQUFDLENBQ2xCIiwiaWdub3JlTGlzdCI6W119