import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeFilled'

      short_name='Bedtime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-146 93-257.5T450-840q-18 99 11 193.5T561-481q71 71 165.5 100T920-370q-26 144-138 237T524-40Z"/>
    </Icon>
  );
});

IconMaterialBedtimeFilled.displayName = 'OnesyIconMaterialBedtimeFilled';

export default IconMaterialBedtimeFilled;
