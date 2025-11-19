import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileLandscapeW100'

      short_name='MobileLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-252v-460h190v-36h134v36h452v460H92Zm748-28v-404H120v404h720Zm-720 0v-404 404Zm108.07-174q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q216-510 208-501.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileLandscapeW100.displayName = 'OnesyIconMaterialMobileLandscapeW100';

export default IconMaterialMobileLandscapeW100;
