import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishedWithChangesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesW100'

      short_name='PublishedWithChanges'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M414-138q-62-13-114-44.5T210.5-259q-37.5-45-58-101.5T132-480q0-85 37.5-158.5T285-768H159v-28h175v175h-28v-127q-75 50-110.5 120T160-480q0 112 69 199.5T414-167v29Zm9-194L290-465l20-20 113 113 227-227 20 20-247 247Zm203 169v-175h28v127q74-51 110-121t36-148q0-112-69-199.5T546-793v-29q125 26 203.5 120.5T828-480q0 85-37.5 159T675-191h126v28H626Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesW100.displayName = 'OnesyIconMaterialPublishedWithChangesW100';

export default IconMaterialPublishedWithChangesW100;
