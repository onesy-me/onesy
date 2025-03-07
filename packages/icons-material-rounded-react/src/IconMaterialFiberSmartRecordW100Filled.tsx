import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberSmartRecordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordW100Filled'

      short_name='FiberSmartRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-252q-95 0-161.5-66.5T132-480q0-95 66.5-161.5T360-708q95 0 161.5 66.5T588-480q0 95-66.5 161.5T360-252Zm296-7q-7 2-11.5-2.5T640-273q0-5 3-8t8-5q66-17 107.5-71T800-480q0-69-41.5-123T651-674q-5-2-8-5.5t-3-8.5q0-7 4.5-11t11.5-2q76 19 124 80.5T828-480q0 79-48 140.5T656-259Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordW100Filled.displayName = 'OnesyIconMaterialFiberSmartRecordW100Filled';

export default IconMaterialFiberSmartRecordW100Filled;
