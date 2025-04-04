import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricalServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesFilled'

      short_name='ElectricalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-360q-17 0-28.5-11.5T720-400q0-17 11.5-28.5T760-440h40q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-40Zm0 160q-17 0-28.5-11.5T720-240q0-17 11.5-28.5T760-280h40q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-40Zm-200 40q-33 0-56.5-23.5T480-240h-40q-17 0-28.5-11.5T400-280v-80q0-17 11.5-28.5T440-400h40q0-33 23.5-56.5T560-480h80q17 0 28.5 11.5T680-440v240q0 17-11.5 28.5T640-160h-80ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h40q17 0 28.5 11.5T360-320q0 17-11.5 28.5T320-280h-40Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesFilled.displayName = 'OnesyIconMaterialElectricalServicesFilled';

export default IconMaterialElectricalServicesFilled;
