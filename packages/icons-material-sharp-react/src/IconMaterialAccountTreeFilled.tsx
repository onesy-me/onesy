import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountTreeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeFilled'

      short_name='AccountTree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120v-120H440v-400h-80v120H80v-320h280v120h240v-120h280v320H600v-120h-80v320h80v-120h280v320H600Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeFilled.displayName = 'OnesyIconMaterialAccountTreeFilled';

export default IconMaterialAccountTreeFilled;
