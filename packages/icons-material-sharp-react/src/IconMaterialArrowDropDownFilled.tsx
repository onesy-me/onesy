import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownFilled'

      short_name='ArrowDropDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360 280-560h400L480-360Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownFilled.displayName = 'OnesyIconMaterialArrowDropDownFilled';

export default IconMaterialArrowDropDownFilled;
