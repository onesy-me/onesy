import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardFullW100'

      short_name='KeyboardFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-188h640v-320H160v320Z"/>
    </Icon>
  );
});

IconMaterialKeyboardFullW100.displayName = 'OnesyIconMaterialKeyboardFullW100';

export default IconMaterialKeyboardFullW100;
