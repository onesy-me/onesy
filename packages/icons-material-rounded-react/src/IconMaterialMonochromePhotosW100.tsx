import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonochromePhotosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonochromePhotosW100'

      short_name='MonochromePhotos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm288-28h288q14 0 23-9t9-23v-416q0-14-9-23t-23-9H640l-74-80h-86v560Z"/>
    </Icon>
  );
});

IconMaterialMonochromePhotosW100.displayName = 'OnesyIconMaterialMonochromePhotosW100';

export default IconMaterialMonochromePhotosW100;
