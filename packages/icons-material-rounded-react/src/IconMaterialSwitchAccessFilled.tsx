import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessFilled'

      short_name='SwitchAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-760q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760Zm320 0q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm640 0q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600ZM160-280q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Zm640 0q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280ZM320-120q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm320 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120ZM360-280q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h240q33 0 56.5 23.5T680-600v240q0 33-23.5 56.5T600-280H360Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessFilled.displayName = 'OnesyIconMaterialSwitchAccessFilled';

export default IconMaterialSwitchAccessFilled;
