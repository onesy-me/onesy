import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexDirectionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirectionFilled'

      short_name='FlexDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-200q0-17 11.5-28.5T120-440h280q17 0 28.5 11.5T440-400v200q0 17-11.5 28.5T400-160H120q-17 0-28.5-11.5T80-200Zm0-360v-200q0-17 11.5-28.5T120-800h280q17 0 28.5 11.5T440-760v200q0 17-11.5 28.5T400-520H120q-17 0-28.5-11.5T80-560Zm80-40h200v-120H160v120Zm560 423q-8 0-15-2.5t-13-8.5L548-332q-11-11-11.5-27.5T548-388q11-11 28-11t28 11l76 75v-447q0-17 11.5-28.5T720-800q17 0 28.5 11.5T760-760v447l76-75q11-11 27.5-11.5T892-388q11 11 11 28t-11 28L748-188q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialFlexDirectionFilled.displayName = 'OnesyIconMaterialFlexDirectionFilled';

export default IconMaterialFlexDirectionFilled;
