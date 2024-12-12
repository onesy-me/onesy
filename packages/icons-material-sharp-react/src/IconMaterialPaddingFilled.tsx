import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPaddingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingFilled'

      short_name='Padding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialPaddingFilled.displayName = 'OnesyIconMaterialPaddingFilled';

export default IconMaterialPaddingFilled;
