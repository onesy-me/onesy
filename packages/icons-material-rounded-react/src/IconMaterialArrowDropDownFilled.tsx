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
      <path d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownFilled.displayName = 'OnesyIconMaterialArrowDropDownFilled';

export default IconMaterialArrowDropDownFilled;
