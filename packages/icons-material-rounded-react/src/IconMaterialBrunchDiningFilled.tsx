import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrunchDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningFilled'

      short_name='BrunchDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160h560v40q0 17-11.5 28.5T600-80H120q-17 0-28.5-11.5T80-120v-40Zm0-80v-40q0-17 11.5-28.5T120-320h160v-40q0-17 11.5-28.5T320-400h80q17 0 28.5 11.5T440-360v40h160q17 0 28.5 11.5T640-280v40H80Zm640-84q-36-41-58-81t-22-97v-338q0-17 11.5-28.5T680-880h160q17 0 28.5 11.5T880-840v338q0 57-21.5 97.5T800-324v164h40q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80h-80q-17 0-28.5-11.5T720-120v-204Zm0-316h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningFilled.displayName = 'OnesyIconMaterialBrunchDiningFilled';

export default IconMaterialBrunchDiningFilled;
