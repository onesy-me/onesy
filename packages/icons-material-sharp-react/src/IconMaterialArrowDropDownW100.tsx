import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownW100'

      short_name='ArrowDropDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-396 342-534h276L480-396Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100.displayName = 'OnesyIconMaterialArrowDropDownW100';

export default IconMaterialArrowDropDownW100;
