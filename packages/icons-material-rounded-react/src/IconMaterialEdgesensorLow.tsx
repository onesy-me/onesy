import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLow'

      short_name='EdgesensorLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-400q-17 0-28.5-11.5T80-440v-200q0-17 11.5-28.5T120-680q17 0 28.5 11.5T160-640v200q0 17-11.5 28.5T120-400Zm720 120q-17 0-28.5-11.5T800-320v-200q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v200q0 17-11.5 28.5T840-280ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm320-120H320v40h320v-40ZM320-760h320v-40H320v40Zm0 0v-40 40Zm0 560v40-40Zm0-80h320v-400H320v400Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLow.displayName = 'OnesyIconMaterialEdgesensorLow';

export default IconMaterialEdgesensorLow;
