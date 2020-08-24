"use strict";

function get_total(){
  var conf_form = document.getElementById("configuration_form");
  var fact_form = document.getElementById("factory_options_form");
  var total = parseFloat(conf_form.configuration.value)+parseFloat(fact_form.factory_option.value);

  if (document.getElementById("upgraded_stereo_system").checked)
    total = total + 550;
  if (document.getElementById("vip_security_system").checked)
    total = total + 399;
  if (document.getElementById("auto_dimming_mirror").checked)
    total = total + 295;

  document.getElementById("sum").value = (total).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
    });
  }

document.getElementById("calculate").addEventListener("click",get_total,false);

var selection = document.getElementById("choose_color");

selection.addEventListener("change", function() {
  document.getElementById("car_photo").src = selection.value;
});
