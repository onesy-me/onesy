import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestRemoteComfortSensor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestRemoteComfortSensor'

      short_name='NestRemoteComfortSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-280q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280q0 33 23.5 56.5T480-200Zm0-560q-94 0-176.5 31T153-643q-14 11-31 11t-30-11q-12-11-12-28t13-28q78-66 177-103.5T480-840q111 0 210 37.5T867-698q13 11 12.5 27.5T867-643q-13 11-29.5 11T807-643q-68-55-150.5-86T480-760Zm0 200q-51 0-96.5 15T300-504q-14 10-31 9.5T239-507q-12-11-12-27t13-26q51-38 111.5-59T480-640q68 0 128 21t111 59q13 10 13.5 26T721-507q-12 12-29 12.5t-31-9.5q-38-26-84-41t-97-15Zm0 280Z"/>
    </Icon>
  );
});

IconMaterialNestRemoteComfortSensor.displayName = 'OnesyIconMaterialNestRemoteComfortSensor';

export default IconMaterialNestRemoteComfortSensor;
