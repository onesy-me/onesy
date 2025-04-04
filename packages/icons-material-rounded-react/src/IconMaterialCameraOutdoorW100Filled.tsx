import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorW100Filled'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27 0 10-7 17t-17 7H496q-33 0-56.5 23.5T416-440v160q0 33 23.5 56.5T496-200h238q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H272Zm224-88q-8.5 0-14.25-5.75T476-280v-160q0-8.5 5.75-14.25T496-460h160q8.5 0 14.25 5.75T676-440v64l50-26q8-4 15 .43 7 4.44 7 12.57v58q0 8.13-7 12.57-7 4.43-15 .43l-50-26v64q0 8.5-5.75 14.25T656-260H496Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorW100Filled.displayName = 'OnesyIconMaterialCameraOutdoorW100Filled';

export default IconMaterialCameraOutdoorW100Filled;
