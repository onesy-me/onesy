import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPergolaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaFilled'

      short_name='Pergola'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-680q0-17 11.5-28.5T160-880q17 0 28.5 11.5T200-840v40h560v-40q0-17 11.5-28.5T800-880q17 0 28.5 11.5T840-840v680q0 17-11.5 28.5T800-120q-17 0-28.5-11.5T760-160v-400H200v400q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Zm320 0v-80h-80q-17 0-28.5-11.5T320-280q0-17 11.5-28.5T360-320h240q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240h-80v80q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160Z"/>
    </Icon>
  );
});

IconMaterialPergolaFilled.displayName = 'OnesyIconMaterialPergolaFilled';

export default IconMaterialPergolaFilled;
