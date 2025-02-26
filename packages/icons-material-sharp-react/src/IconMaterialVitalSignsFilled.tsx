import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVitalSignsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSignsFilled'

      short_name='VitalSigns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-440v-80h228l92 244 240-633 148 389h172v80H692l-92-244L360-51 212-440H40Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsFilled.displayName = 'OnesyIconMaterialVitalSignsFilled';

export default IconMaterialVitalSignsFilled;
