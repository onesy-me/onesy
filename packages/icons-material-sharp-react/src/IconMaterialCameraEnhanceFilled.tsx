import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraEnhanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhanceFilled'

      short_name='CameraEnhance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Zm0-1-1.1-2.4L8.5 13l2.4-1.1L12 9.5l1.1 2.4 2.4 1.1-2.4 1.1ZM2 21V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceFilled.displayName = 'OnesyIconMaterialCameraEnhanceFilled';

export default IconMaterialCameraEnhanceFilled;
