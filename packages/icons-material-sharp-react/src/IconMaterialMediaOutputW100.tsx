import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaOutputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputW100'

      short_name='MediaOutput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-520ZM132-212v-616h428v178q-7 2-14.12 3.45-7.12 1.44-13.88 3.55v-157H160v560h152v28H132Zm180-93v-29q-27-11-44.5-35T250-424q0-40 28-68t68-28q5 0 8.5.5t8.5 1.5q5-6 9.17-12.53 4.16-6.53 8.83-12.47-8-2-16.75-3.5T346-548q-51.37 0-87.69 36.31Q222-475.37 222-424q0 43 25.5 75.5T312-305Zm34.12-315q20.88 0 35.38-14.62 14.5-14.62 14.5-35.5 0-20.88-14.62-35.38-14.62-14.5-35.5-14.5-20.88 0-35.38 14.62-14.5 14.62-14.5 35.5 0 20.88 14.62 35.38 14.62 14.5 35.5 14.5ZM508-132h-96v-216q0-86.67 60.74-147.33Q533.47-556 620.24-556q86.76 0 147.26 60.67Q828-434.67 828-348v216h-96v-168h68v-48q0-75-52.5-127.5T620-528q-75 0-127.5 52.5T440-348v48h68v168Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputW100.displayName = 'OnesyIconMaterialMediaOutputW100';

export default IconMaterialMediaOutputW100;
