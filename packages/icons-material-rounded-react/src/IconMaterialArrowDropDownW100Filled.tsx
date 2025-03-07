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
      <path d="m463.7-412.3-95.72-95.72q-1.98-1.98-3.48-4.74-1.5-2.77-1.5-5.92 0-6.32 4.13-10.82 4.12-4.5 10.87-4.5h204q6.75 0 10.88 4.64 4.12 4.63 4.12 10.81 0 1.55-5 10.55l-95.7 95.7q-3.3 3.3-7.36 5.3-4.06 2-8.94 2-4.87 0-8.94-2-4.06-2-7.36-5.3Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownW100Filled.displayName = 'OnesyIconMaterialArrowDropDownW100Filled';

export default IconMaterialArrowDropDownW100Filled;
