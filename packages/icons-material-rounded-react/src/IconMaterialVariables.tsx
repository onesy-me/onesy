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
      <path d="M120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280H160q-17 0-28.5-11.5T120-320Zm80-40h560v-240H200v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialVariables.displayName = 'OnesyIconMaterialVariables';

export default IconMaterialVariables;
