import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraW100'

      short_name='Camera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M450-588h332q-26-71-84-126.5T566-788L450-588Zm-80 80 168-288q-11-2-29-3t-29-1q-66 0-123 25t-101 67l114 200ZM170-400h230L236-686q-36 44-56 95.5T160-480q0 21 2.5 40.5T170-400Zm226 228 116-200H178q26 71 85 126.5T396-172Zm84 12q66 0 123-25t101-67L590-452 424-166q11 3 27.5 4.5T480-160Zm244-114q32-41 54-95.5T800-480q0-21-2.5-40.5T790-560H560l164 286ZM480-480Zm0 348q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Z"/>
    </Icon>
  );
});

IconMaterialCameraW100.displayName = 'OnesyIconMaterialCameraW100';

export default IconMaterialCameraW100;
