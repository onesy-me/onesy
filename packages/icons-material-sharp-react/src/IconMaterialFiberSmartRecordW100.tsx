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
      <path d="M360.19-252Q265-252 198.5-318.31T132-479.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T360.19-252ZM360-480Zm280 224v-28q70-14 115-69t45-127q0-72-45-127t-115-69v-28q82 14 135 77.5T828-480q0 83-53 146.5T640-256Zm-280-24q83 0 141.5-58.5T560-480q0-83-58.5-141.5T360-680q-83 0-141.5 58.5T160-480q0 83 58.5 141.5T360-280Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordW100.displayName = 'OnesyIconMaterialFiberSmartRecordW100';

export default IconMaterialFiberSmartRecordW100;
