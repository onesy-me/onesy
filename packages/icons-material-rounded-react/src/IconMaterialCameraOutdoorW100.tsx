import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M496-260q-8.5 0-14.25-5.75T476-280v-160q0-8.5 5.75-14.25T496-460h160q8.5 0 14.25 5.75T676-440v64l50-26q8-4 15 .43 7 4.44 7 12.57v58q0 8.13-7 12.57-7 4.43-15 .43l-50-26v64q0 8.5-5.75 14.25T656-260H496Zm-284 28v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l227 171q5 5 5 9.5t-3.12 9.37q-3.12 4.88-8.5 6.5Q731-551 726-556L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9h462q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H272q-24.75 0-42.37-17.63Q212-207.25 212-232Zm268-238Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100.displayName = 'OnesyIconMaterialCameraOutdoorW100';

export default IconMaterialCameraOutdoorW100;
