import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackGroup'

      short_name='StackGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80v-240H80v-560h560v240h240v560H320Zm80-80h400v-400H560v-240H160v400h240v240Zm80-320Z"/>
    </Icon>
  );
});

IconMaterialStackGroup.displayName = 'OnesyIconMaterialStackGroup';

export default IconMaterialStackGroup;
