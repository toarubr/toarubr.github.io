  function fix_data(a,target){
  var data = new Date(a);
  var data_retorno = "";
  var dias_semana = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];

  data_retorno += data.getDate();
  data_retorno += "/";
  data_retorno += (data.getMonth()+1);
  data_retorno += "/";
  data_retorno += data.getFullYear();
  data_retorno += " ("+dias_semana[data.getDay()]+") às ";
  data_retorno += data.getHours();
  data_retorno += ":";
  data_retorno += data.getMinutes();

  document.getElementById(target).innerHTML = data_retorno;
  
  

  }
