import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRvHookupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupFilled'

      short_name='RvHookup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-100-56-56 44-44H472q-12 36-43 58t-69 22q-38 0-68.5-22T248-200H80v-360h240v-120H80v-80h600v480h86l-42-42 56-58 140 140-140 140ZM400-560h200v-120H400v120Zm-40 360q17 0 28.5-11.5T400-240q0-17-11.5-28.5T360-280q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200Z"/>
    </Icon>
  );
});

IconMaterialRvHookupFilled.displayName = 'OnesyIconMaterialRvHookupFilled';

export default IconMaterialRvHookupFilled;
