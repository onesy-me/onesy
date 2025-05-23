import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowSensorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorW100'

      short_name='WindowSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M854-600q-6 0-10-4t-4-10v-160q0-6 4-10t10-4q6 0 10 4t4 10v160q0 6-4 10t-10 4ZM172-232v-496q0-25 17.5-42.5T232-788h416q25 0 42.5 17.5T708-728v496q0 25-17.5 42.5T648-172H232q-25 0-42.5-17.5T172-232Zm28-262h212v-13q0-6 4.5-10.5T427-522h26q6 0 10.5 4.5T468-507v13h212v-234q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v234Zm32 294h416q14 0 23-9t9-23v-234H200v234q0 14 9 23t23 9Zm0 0h448-480 32Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorW100.displayName = 'OnesyIconMaterialWindowSensorW100';

export default IconMaterialWindowSensorW100;
