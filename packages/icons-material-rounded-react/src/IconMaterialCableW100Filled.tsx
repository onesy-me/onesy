import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableW100Filled'

      short_name='Cable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-146q-6 0-10-4t-4-10v-46h-10q-13 0-21.5-8.5T146-236v-104q0-6 4-10t10-4h66v-326q0-56 39-95t95-39q56 0 95 39t39 95v400q0 45 30.5 75.5T600-174q45 0 75.5-30.5T706-280v-326h-66q-6 0-10-4t-4-10v-104q0-13 8.5-21.5T656-754h10v-46q0-6 4-10t10-4h80q6 0 10 4t4 10v46h10q13 0 21.5 8.5T814-724v104q0 6-4 10t-10 4h-66v326q0 56-39 95t-95 39q-56 0-95-39t-39-95v-400q0-45-30.5-75.5T360-786q-45 0-75.5 30.5T254-680v326h66q6 0 10 4t4 10v104q0 13-8.5 21.5T304-206h-10v46q0 6-4 10t-10 4h-80Z"/>
    </Icon>
  );
});

IconMaterialCableW100Filled.displayName = 'OnesyIconMaterialCableW100Filled';

export default IconMaterialCableW100Filled;
