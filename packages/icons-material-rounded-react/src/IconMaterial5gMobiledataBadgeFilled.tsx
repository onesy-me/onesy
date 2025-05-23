import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5gMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gMobiledataBadgeFilled'

      short_name='5gMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm440-160h120q33 0 56.5-23.5T760-360v-120q0-17-11.5-28.5T720-520h-40q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440v80H560v-240h200q0-33-23.5-56.5T680-680H560q-33 0-56.5 23.5T480-600v240q0 33 23.5 56.5T560-280Zm-200 0q33 0 56.5-23.5T440-360v-80q0-33-23.5-56.5T360-520h-80v-80h120q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v160q0 17 11.5 28.5T240-440h120v80H240q-17 0-28.5 11.5T200-320q0 17 11.5 28.5T240-280h120Z"/>
    </Icon>
  );
});

IconMaterial5gMobiledataBadgeFilled.displayName = 'OnesyIconMaterial5gMobiledataBadgeFilled';

export default IconMaterial5gMobiledataBadgeFilled;
