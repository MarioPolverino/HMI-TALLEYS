import { JoystickCenter } from '../../01.entities/joystick-center/JoystickCenter.js';
import { PressAndHoldButton } from '../../99.utils/ui/PressAndHoldButton.js'; 
import { PressAndHoldButtonByClass } from '../../99.utils/ui/PressAndHoldButtonByClass.js';
import { CircleButtonUI } from '../js/CircleButtonUI.js';

export function ButtonJoystickCenter(elementN){
    const id = 9; // Id use for config DataWriteList.js
    const idCmd = 7; // Id use for config DataWriteList.js
    const elementId = 'btn_CENTER'; // Id of button 
    const entity = new JoystickCenter();
    const elementUI = new CircleButtonUI(elementId, 'btn_circle_out_CENTER')
    const elementClass = 'btn_CENTER';

    const button = new PressAndHoldButtonByClass(id, elementClass,elementN, entity, elementUI );
    const command = new PressAndHoldButtonByClass(idCmd, elementClass,elementN, entity, elementUI );
    return {button, command};
}
