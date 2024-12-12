import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRight'

      short_name='SwitchRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-200 120-480l280-280v560Zm160 0v-560l280 280-280 280Zm60-145 135-135-135-135v270Z"/>
    </Icon>
  );
});

IconMaterialSwitchRight.displayName = 'OnesyIconMaterialSwitchRight';

export default IconMaterialSwitchRight;
