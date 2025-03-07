import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimeAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoFilled'

      short_name='TimeAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M417-350h124l15 46q4 11 13 17.5t20 6.5q19 0 29.5-15.5T623-328l-94-265q-4-11-14-18t-22-7h-26q-12 0-22 7t-14 18l-95 267q-6 17 4.5 31.5T369-280q11 0 20-6.5t13-17.5l15-46Zm19-58 44-132 43 132h-87Zm-36-432q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoFilled.displayName = 'OnesyIconMaterialTimeAutoFilled';

export default IconMaterialTimeAutoFilled;
