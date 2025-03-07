import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearW100'

      short_name='CameraRear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-768q0-26 17-43t43-17h336q26 0 43 17t17 43v474q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-474q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v474q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-474Zm228.05 206Q504-562 521-579.05q17-17.06 17-41Q538-644 520.95-661q-17.06-17-41-17Q456-678 439-660.95q-17 17.06-17 41Q422-596 439.05-579q17.06 17 41 17ZM470-186H266q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h204l-60-60q-4-4-4.5-9.5T410-294q5-5 10-5t10 5l73 73q9 9 9 21t-9 21l-73 73q-4 4-9.5 4.5T410-106q-5-5-5-10t5-10l60-60Zm104 0q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h120q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H574Zm-94-434Z"/>
    </Icon>
  );
});

IconMaterialCameraRearW100.displayName = 'OnesyIconMaterialCameraRearW100';

export default IconMaterialCameraRearW100;
