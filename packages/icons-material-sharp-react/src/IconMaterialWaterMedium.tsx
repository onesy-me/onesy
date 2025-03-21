import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMedium'

      short_name='WaterMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m255-388 25 228h400l26-240h-9q-38 0-69.5-5.5T542-427q-23-7-48-10t-50-3q-51 0-98.5 13T255-388Zm-10-86q47-23 97.5-34.5T445-520q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H210l35 326ZM208-80l-88-800h720L752-80H208Zm72-80h400-400Z"/>
    </Icon>
  );
});

IconMaterialWaterMedium.displayName = 'OnesyIconMaterialWaterMedium';

export default IconMaterialWaterMedium;
