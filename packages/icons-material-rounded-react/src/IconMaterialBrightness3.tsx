import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3'

      short_name='Brightness3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M507-196q80-42 126.5-117.5T680-477q0-92-46.5-168.5T507-764q45 62 69 135t24 152q0 75-24 147t-69 134Zm123-581q61 57 95.5 138T760-477q0 85-34.5 160T630-185q-52 48-117 76T377-81q-12 0-25-1t-25-4q-10-2-16-9t-6-17q0-8 4-13.5t11-9.5q93-53 146.5-144T520-477q0-104-53.5-200.5T320-827q-7-4-11-9.5t-4-13.5q0-10 6-16.5t16-8.5q12-3 25-4t25-1q71 0 136 27.5T630-777Zm-30 300Z"/>
    </Icon>
  );
});

IconMaterialBrightness3.displayName = 'OnesyIconMaterialBrightness3';

export default IconMaterialBrightness3;
