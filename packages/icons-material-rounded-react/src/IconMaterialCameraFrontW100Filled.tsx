import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontW100Filled'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-768q0-26 17-43t43-17h336q26 0 43 17t17 43v428q0 25-17.5 42.5T648-280H520q-9 0-17.5-3.5T488-293l-26-26q-17-17-42-17t-42 17l-21 21q-10 10-21.5 14.5T313-279q-23 0-42-17t-19-44v-428Zm28 362q44-20 99-33t101-13q46 0 101 13t99 33v-362q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v362Zm200-116q-39 0-66.5-27.5T386-616q0-39 27.5-66.5T480-710q39 0 66.5 27.5T574-616q0 39-27.5 66.5T480-522Zm-10 336H266q-6 0-10-4t-4-10q0-6 4-10t10-4h204l-60-60q-4-4-4.5-9.5T410-294q5-5 10-5t10 5l73 73q9 9 9 21t-9 21l-73 73q-4 4-9.5 4.5T410-106q-5-5-5-10t5-10l60-60Zm104 0q-6 0-10-4t-4-10q0-6 4-10t10-4h120q6 0 10 4t4 10q0 6-4 10t-10 4H574Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100Filled.displayName = 'OnesyIconMaterialCameraFrontW100Filled';

export default IconMaterialCameraFrontW100Filled;
