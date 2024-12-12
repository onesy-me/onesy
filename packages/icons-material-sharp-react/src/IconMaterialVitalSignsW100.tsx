import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVitalSignsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSignsW100'

      short_name='VitalSigns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-466v-28h204l84 210 196-466 106 256h184v28H664l-86-211-197 466-103-255H94Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsW100.displayName = 'OnesyIconMaterialVitalSignsW100';

export default IconMaterialVitalSignsW100;
