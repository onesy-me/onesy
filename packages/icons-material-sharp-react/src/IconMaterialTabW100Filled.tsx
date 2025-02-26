import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100Filled'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm388-348h280v-160H520v160Z"/>
    </Icon>
  );
});

IconMaterialTabW100Filled.displayName = 'OnesyIconMaterialTabW100Filled';

export default IconMaterialTabW100Filled;
