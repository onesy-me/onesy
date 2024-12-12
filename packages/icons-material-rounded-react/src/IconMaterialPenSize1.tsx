import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPenSize1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize1'

      short_name='PenSize1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199-199q-9-9-9-21t9-21l520-520q9-9 21-9t21 9q9 9 9 21t-9 21L241-199q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialPenSize1.displayName = 'OnesyIconMaterialPenSize1';

export default IconMaterialPenSize1;
