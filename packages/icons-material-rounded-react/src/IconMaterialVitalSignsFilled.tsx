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
      <path d="M360-160q-19 0-34-11t-22-28l-92-241H80q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h160q13 0 22.5 7t14.5 19l83 218 184-485q7-17 22-28t34-11q19 0 34 11t22 28l92 241h132q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H720q-13 0-22.5-7T683-466l-83-218-184 485q-7 17-22 28t-34 11Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsFilled.displayName = 'OnesyIconMaterialVitalSignsFilled';

export default IconMaterialVitalSignsFilled;
