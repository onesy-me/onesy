import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorW100Filled'

      short_name='CameraIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm96-128h160q8.5 0 14.25-5.75T548-320v-64l50 26q8 4 15-.43 7-4.44 7-12.57v-58q0-8.13-7-12.57-7-4.43-15-.43l-50 26v-64q0-8.5-5.75-14.25T528-500H368q-8.5 0-14.25 5.75T348-480v160q0 8.5 5.75 14.25T368-300Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorW100Filled.displayName = 'OnesyIconMaterialCameraIndoorW100Filled';

export default IconMaterialCameraIndoorW100Filled;
