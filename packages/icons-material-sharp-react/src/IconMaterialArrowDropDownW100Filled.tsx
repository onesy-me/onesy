import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownW100Filled'

      short_name='ArrowDropDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-396 342-534h276L480-396Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100Filled.displayName = 'OnesyIconMaterialArrowDropDownW100Filled';

export default IconMaterialArrowDropDownW100Filled;
