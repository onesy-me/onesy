import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fpsSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSelectFilled'

      short_name='30fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h160v-80H200q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h160v-80H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q33 0 56.5 23.5T440-720v60q0 26-17 43t-43 17q26 0 43 17t17 43v60q0 33-23.5 56.5T360-400H200Zm400 0q-33 0-56.5-23.5T520-480v-240q0-33 23.5-56.5T600-800h120q33 0 56.5 23.5T800-720v240q0 33-23.5 56.5T720-400H600Zm0-80h120v-240H600v240ZM160-80q-17 0-28.5-11.5T120-120v-120q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240v120q0 17-11.5 28.5T160-80Zm160 0q-17 0-28.5-11.5T280-120v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120q0 17-11.5 28.5T320-80Zm160 0q-17 0-28.5-11.5T440-120v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120q0 17-11.5 28.5T480-80Zm160 0q-17 0-28.5-11.5T600-120v-120q0-17 11.5-28.5T640-280h160q17 0 28.5 11.5T840-240v120q0 17-11.5 28.5T800-80H640Z"/>
    </Icon>
  );
});

IconMaterial30fpsSelectFilled.displayName = 'OnesyIconMaterial30fpsSelectFilled';

export default IconMaterial30fpsSelectFilled;
