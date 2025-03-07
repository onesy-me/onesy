import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearW100Filled'

      short_name='CameraRear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-280q-12.75 0-21.37-8.63Q252-297.25 252-310v-458q0-24.75 17.63-42.38Q287.25-828 312-828h336q24.75 0 42.38 17.62Q708-792.75 708-768v458q0 12.75-8.62 21.37Q690.75-280 678-280H520q-8.93 0-17.49-3.61-8.56-3.61-14.51-9.39l-26-26q-16.93-17-41.97-17Q395-336 378-319l-26 26q-5.95 5.78-14.51 9.39Q328.93-280 320-280h-38Zm197.95-398Q456-678 439-660.95q-17 17.06-17 41Q422-596 439.05-579q17.06 17 41 17Q504-562 521-579.05q17-17.06 17-41Q538-644 520.95-661q-17.06-17-41-17ZM470-186H266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h204l-60-60q-5-5-5-10t5-10q5-5 10-5t10 5l73 73q9 9 9 21t-9 21l-73 73q-5 5-10 5t-10-5q-5-5-5-10t5-10l60-60Zm104 0q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h120q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H574Z"/>
    </Icon>
  );
});

IconMaterialCameraRearW100Filled.displayName = 'OnesyIconMaterialCameraRearW100Filled';

export default IconMaterialCameraRearW100Filled;
