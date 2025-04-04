import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeFilled'

      short_name='EvMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm280-160q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360H280v-80h80q17 0 28.5-11.5T400-480q0-17-11.5-28.5T360-520h-80v-80h120q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v320q0 17 11.5 28.5T240-280h160Zm220-160-53-211q-3-13-13-21t-24-8q-19 0-31 15t-7 33l81 323q3 13 13 21t24 8h20q14 0 24-8t13-21l81-323q5-18-7-33t-31-15q-14 0-24 8t-13 21l-53 211Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeFilled.displayName = 'OnesyIconMaterialEvMobiledataBadgeFilled';

export default IconMaterialEvMobiledataBadgeFilled;
