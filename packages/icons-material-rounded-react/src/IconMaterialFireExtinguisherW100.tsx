import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFireExtinguisherW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisherW100'

      short_name='FireExtinguisher'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-158q-23 0-38.5-15.5T336-212v-14h288v14q0 23-15.5 38.5T570-158H390Zm-54-108v-200h288v200H336Zm0-240q9-35 39.5-66t84.5-40v-11q-17-4-30.5-15.5T410-662l-59-16q-8-2-12-8.5t-4-13.5q0-7 4-13.5t12-8.5l58-16q10-19 29-30.5t42-11.5q15 0 28 4.5t24 14.5l54-16q14-5 26 4.5t12 24.5v92q0 16-13 25t-28 3l-44-18q-8 8-17.5 13.5T500-622v10q49 8 82.5 39.5T624-506H336Zm144-154q16 0 28-12t12-28q0-17-12-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Z"/>
    </Icon>
  );
});

IconMaterialFireExtinguisherW100.displayName = 'OnesyIconMaterialFireExtinguisherW100';

export default IconMaterialFireExtinguisherW100;
