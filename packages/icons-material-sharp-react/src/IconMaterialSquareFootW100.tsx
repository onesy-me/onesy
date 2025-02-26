import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFootW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootW100'

      short_name='SquareFoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-498l96 96-24 24 16 16 24-24 80 80-24 24 16 16 24-24 84 84-24 24 16 16 24-24 80 80-24 24 16 16 24-24 94 94H200Zm40-40h332L240-572v332Z"/>
    </Icon>
  );
});

IconMaterialSquareFootW100.displayName = 'OnesyIconMaterialSquareFootW100';

export default IconMaterialSquareFootW100;
