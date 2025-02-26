import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFootW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootW100Filled'

      short_name='SquareFoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-200q-30 0-51-21t-21-51v-358q0-20 16.5-27.5T246-652l50 50-24 24 16 16 24-24 80 80-24 24 16 16 24-24 84 84-24 24 16 16 24-24 80 80-24 24 16 16 24-24 50 50q12 12 4.5 28T632-200H272Zm0-40h300L240-572v300q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialSquareFootW100Filled.displayName = 'OnesyIconMaterialSquareFootW100Filled';

export default IconMaterialSquareFootW100Filled;
