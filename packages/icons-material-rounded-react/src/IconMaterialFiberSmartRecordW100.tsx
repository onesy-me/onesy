import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberSmartRecordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordW100'

      short_name='FiberSmartRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-252q-95 0-161.5-66.5T132-480q0-95 66.5-161.5T360-708q95 0 161.5 66.5T588-480q0 95-66.5 161.5T360-252Zm0-228Zm296 221q-7 2-11.5-2.5T640-273q0-5 3-8t8-5q66-17 107.5-71T800-480q0-69-41.5-123T651-674q-5-2-8-5.5t-3-8.5q0-7 4.5-11t11.5-2q76 19 124 80.5T828-480q0 79-48 140.5T656-259Zm-296-21q83 0 141.5-58.5T560-480q0-83-58.5-141.5T360-680q-83 0-141.5 58.5T160-480q0 83 58.5 141.5T360-280Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordW100.displayName = 'OnesyIconMaterialFiberSmartRecordW100';

export default IconMaterialFiberSmartRecordW100;
