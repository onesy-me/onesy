import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebW100Filled'

      short_name='Web'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h446v-160H160v160Zm474 0h166v-348H634v348ZM160-428h446v-160H160v160Z"/>
    </Icon>
  );
});

IconMaterialWebW100Filled.displayName = 'OnesyIconMaterialWebW100Filled';

export default IconMaterialWebW100Filled;
