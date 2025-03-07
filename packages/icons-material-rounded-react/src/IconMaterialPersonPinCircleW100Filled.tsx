import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleW100Filled'

      short_name='PersonPinCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-147q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-7 6-15.5 9t-16.5 3Zm0-239q42 0 77.5-18.5T617-454q-30-20-64.5-30T480-494q-38 0-72.5 10T343-454q24 31 59.5 49.5T480-386Zm0-200q23 0 38.5-15.5T534-640q0-23-15.5-38.5T480-694q-23 0-38.5 15.5T426-640q0 23 15.5 38.5T480-586Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleW100Filled.displayName = 'OnesyIconMaterialPersonPinCircleW100Filled';

export default IconMaterialPersonPinCircleW100Filled;
