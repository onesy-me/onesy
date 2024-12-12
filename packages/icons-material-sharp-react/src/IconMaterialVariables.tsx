import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVariables = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Variables'

      short_name='Variables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialVariables.displayName = 'OnesyIconMaterialVariables';

export default IconMaterialVariables;
