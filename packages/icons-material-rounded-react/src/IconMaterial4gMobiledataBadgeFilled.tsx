import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4gMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeFilled'

      short_name='4gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm480-160h120q33 0 56.5-23.5T800-360v-120q0-17-11.5-28.5T760-520h-60q-17 0-28.5 11.5T660-480q0 17 11.5 28.5T700-440h20v80H600v-240h200q0-33-23.5-56.5T720-680H600q-33 0-56.5 23.5T520-600v240q0 33 23.5 56.5T600-280ZM320-400v80q0 17 11.5 28.5T360-280q17 0 28.5-11.5T400-320v-80h40q17 0 28.5-11.5T480-440q0-17-11.5-28.5T440-480h-40v-160q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640v160h-80v-160q0-17-11.5-28.5T200-680q-17 0-28.5 11.5T160-640v200q0 17 11.5 28.5T200-400h120Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeFilled.displayName = 'OnesyIconMaterial4gMobiledataBadgeFilled';

export default IconMaterial4gMobiledataBadgeFilled;
