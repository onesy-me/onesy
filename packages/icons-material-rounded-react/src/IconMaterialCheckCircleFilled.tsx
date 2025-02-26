import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleFilled'

      short_name='CheckCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-408-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-408Zm56 328q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleFilled.displayName = 'OnesyIconMaterialCheckCircleFilled';

export default IconMaterialCheckCircleFilled;
