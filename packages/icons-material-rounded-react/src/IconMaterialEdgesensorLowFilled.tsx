import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowFilled'

      short_name='EdgesensorLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-400q-17 0-28.5-11.5T80-440v-200q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v200q0 17-11.5 28.5T120-400Zm720 120q-17 0-28.5-11.5T800-320v-200q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v200q0 17-11.5 28.5T840-280ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm0-200h320v-400H320v400Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowFilled.displayName = 'OnesyIconMaterialEdgesensorLowFilled';

export default IconMaterialEdgesensorLowFilled;
