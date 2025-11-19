import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilesFilled'

      short_name='Files'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-120h360q33 0 56.5-23.5T520-440v-360h280q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160ZM80-400v-240q0-33 23.5-56.5T160-720h240L80-400Zm153-40 207-207v207H233Z"/>
    </Icon>
  );
});

IconMaterialFilesFilled.displayName = 'OnesyIconMaterialFilesFilled';

export default IconMaterialFilesFilled;
