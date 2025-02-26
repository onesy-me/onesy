import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallQualityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityW100Filled'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M719-132q-103 0-207.5-48.5T318.5-318Q230-407 181-512.5T132-719v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29Zm-64.85-348Q582-480 531-530.85t-51-123Q480-726 530.85-777t123-51Q726-828 777-777.15t51 123Q828-582 777.15-531t-123 51ZM640-540h28v-138h-28v138Zm-6-184h40v-40h-40v40Z"/>
    </Icon>
  );
});

IconMaterialCallQualityW100Filled.displayName = 'OnesyIconMaterialCallQualityW100Filled';

export default IconMaterialCallQualityW100Filled;
