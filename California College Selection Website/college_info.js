var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
	  {name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
	  {name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);

function search(){

    var own_inp = document.querySelector('input[name="college_type"]:checked').value;
    var max_tuit = document.getElementById("max_tuit").value;
    var max_sat = document.getElementById("max_sat").value;
    var min_sat = document.getElementById("min_sat").value;
    var table = document.getElementById("table_tuit");

    table.innerHTML = '<tr id="top_row"><th id="t_name">Name</th><th id="t_sath">SAT High</th><th id="t_satl">SAT Low</th><th id="t_tuit">Tuition</th></tr>';

    for (i = 0; i<univArray.length; i++){

      if (max_sat == ""){
        max_sat = 1000000000;
      }

      if (min_sat == ""){
        min_sat = 0;
      }

      if (max_tuit == ""){
        max_tuit = 1000000000;
      }

      if (own_inp == "Don't Care"){
        if ((univArray[i]["SATh"] <= max_sat) && (univArray[i]["SATl"] >= min_sat)
        && (univArray[i]["tuition"] <= max_tuit)){
          var new_row = table.insertRow();
          new_row.innerHTML = "<td>"+univArray[i]["nickname"]+"</td><td>"+univArray[i]["SATh"]+"</td><td>"+univArray[i]["SATl"]+"</td><td>"+univArray[i]["tuition"].toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
            });;
        }
      } else {
        if ((univArray[i]["ownership"] == own_inp) && (univArray[i]["SATh"] <= max_sat) && (univArray[i]["SATl"] >= min_sat)
        && (univArray[i]["tuition"] <= max_tuit)){
          var new_row = table.insertRow();
          new_row.innerHTML = "<td>"+univArray[i]["nickname"]+"</td><td>"+univArray[i]["SATh"]+"</td><td>"+univArray[i]["SATl"]+"</td><td>"+univArray[i]["tuition"].toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
            });;
        }
      }
    }

    for (i = 1; i<table.rows.length; i++){

        if (i % 2 == 0){
          table.rows[i].className = "white";
        } else {
          table.rows[i].className = "gray";
        }
      }
}

document.getElementById("update").addEventListener("click",search,false);
document.getElementById("t_name").addEventListener("click",()=>{alert("Name sorted")},false);
document.getElementById("t_sath").addEventListener("click",()=>{alert("High SAT sorted")},false);
document.getElementById("t_satl").addEventListener("click",()=>{alert("Low SAT sorted")},false);
document.getElementById("t_tuit").addEventListener("click",()=>{alert("Tuition sorted")},false);
