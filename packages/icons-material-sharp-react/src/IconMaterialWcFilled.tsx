import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcFilled'

      short_name='Wc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-80v-300h-60v-300h280v300h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l118-360h124l118 360H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z"/>
    </Icon>
  );
});

IconMaterialWcFilled.displayName = 'OnesyIconMaterialWcFilled';

export default IconMaterialWcFilled;
