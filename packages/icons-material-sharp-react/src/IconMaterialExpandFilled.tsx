import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandFilled'

      short_name='Expand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm320-120L320-360l56-56 64 62v-252l-64 62-56-56 160-160 160 160-56 56-64-62v252l64-62 56 56-160 160ZM160-800v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialExpandFilled.displayName = 'OnesyIconMaterialExpandFilled';

export default IconMaterialExpandFilled;
