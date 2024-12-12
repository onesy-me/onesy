import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardCapslockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockW100Filled'

      short_name='KeyboardCapslock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-266v-28h428v28H266Zm214-434 204 204-20 20-184-184-184 184-20-20 204-204Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockW100Filled.displayName = 'OnesyIconMaterialKeyboardCapslockW100Filled';

export default IconMaterialKeyboardCapslockW100Filled;
