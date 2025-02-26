import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOptionKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyW100Filled'

      short_name='KeyboardOptionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M606-226 329-706H172v-28h173l277 480h166v28H606Zm20-480v-28h162v28H626Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyW100Filled.displayName = 'OnesyIconMaterialKeyboardOptionKeyW100Filled';

export default IconMaterialKeyboardOptionKeyW100Filled;
