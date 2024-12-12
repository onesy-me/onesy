import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2Filled'

      short_name='Man2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-80v-280H320v-320h320v320H540v280H420Zm60-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialMan2Filled.displayName = 'OnesyIconMaterialMan2Filled';

export default IconMaterialMan2Filled;
