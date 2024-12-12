import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeenhereFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereFilled'

      short_name='Beenhere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 160-280v-600h640v600L480-40Zm-42-320 226-226-56-58-170 170-84-84-58 56 142 142Z"/>
    </Icon>
  );
});

IconMaterialBeenhereFilled.displayName = 'OnesyIconMaterialBeenhereFilled';

export default IconMaterialBeenhereFilled;
