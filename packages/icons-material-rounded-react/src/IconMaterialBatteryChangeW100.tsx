import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryChangeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChangeW100'

      short_name='BatteryChange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-132q-13 0-21.5-8.5T326-162v-583q0-13 8.5-21.5T356-775h60v-23q0-13 8.5-21.5T446-828h68q13 0 21.5 8.5T544-798v23h60q13 0 21.5 8.5T634-745v583q0 13-8.5 21.5T604-132H356Zm-2-28h252v-588H354v588Zm0 0h252-252Zm72-225q0 17 6.5 33.5T451-323l10 9q4 4 9 4.5t10-4.5q5-4 5-9.5t-4-10.5l-10-10q-8-8-12.5-18.5T454-384q0-11 4.5-22t12.5-19l38-38q12-12 18.5-27.5T534-523q0-17-6.5-33.5T509-585l-10-10q-4-4-9.5-3.5T479-593q-4 4-4 9t4 9l9 10q8 8 13 18.5t5 22.5q0 12-4.5 22T489-484l-37 38q-12 12-19 28t-7 33Z"/>
    </Icon>
  );
});

IconMaterialBatteryChangeW100.displayName = 'OnesyIconMaterialBatteryChangeW100';

export default IconMaterialBatteryChangeW100;
