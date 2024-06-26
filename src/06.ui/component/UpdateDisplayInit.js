import config from "../../00.config/config.js";

export function UpdateDisplayInit(data) {
  const AGVnumber = document.getElementById('agv-n');
  const SelLogical = document.getElementById('buttonSelectionLogicalPosition');
  const SelPhysical = document.getElementsByClassName('buttonSelectionPhysicalPosition');
  const SetPhysicalPosition = document.getElementsByClassName('current-set-position');
  const SetLogicalPosition2 = document.getElementById('section2-logical-position');
  const SetLogicalPosition3 = document.getElementById('section3-logical-position');
  const BatteryMinStartCharging = document.getElementById('Minimum-level-value');
  const BatteryMaxStopCharging = document.getElementById('Maximum-level-value');
  console.log(data);
  config.MotherPositionColumn = data.ColumnOfMotherShuttle;
  AGVnumber.innerText = data.BabyNo;

  if (data.SelPhysicalLogical) {
    for (let i = 0; i < SelLogical.length; i++) {
      SelLogical[i].classList.add('pressed');
    }
    for (let i = 0; i < SelPhysical.length; i++) {
      SelPhysical[i].classList.remove('pressed');
    }
    
  } else {
    for (let i = 0; i < SelLogical.length; i++) {
      SelLogical[i].classList.remove('pressed');
    }

    for (let i = 0; i < SelPhysical.length; i++) {
      SelPhysical[i].classList.add('pressed');
    }
  }

  for (let i = 0; i < SetPhysicalPosition.length; i++) {
    SetPhysicalPosition[i].innerHTML = data.PositionToReach_mm + ' mm';
  }


    SetLogicalPosition2.innerHTML = data.PositionToReach_logical;
    SetLogicalPosition3.innerHTML = data.PositionToReach_logical;
    BatteryMinStartCharging.innerHTML = data.BatteryMinStartCharging + '%';
    BatteryMaxStopCharging.innerHTML = data.BatteryMaxStopCharging + '%';

  
}