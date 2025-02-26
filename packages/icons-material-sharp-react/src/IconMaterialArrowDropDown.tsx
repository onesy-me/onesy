import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDown'

      short_name='ArrowDropDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360 280-560h400L480-360Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDown.displayName = 'OnesyIconMaterialArrowDropDown';

export default IconMaterialArrowDropDown;
