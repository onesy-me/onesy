import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileUploadOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadOff'

      short_name='FileUploadOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-646v92l-80-80-63-63 75-75q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q12 12 11.5 28T652-572q-12 12-28.5 12.5T595-571l-75-75Zm-80 126 80 80v80q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-160Zm246 360H240q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h366L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84l-77-76Zm114-114-71-71q5-6 12.5-10.5T760-360q17 0 28.5 11.5T800-320v46Z"/>
    </Icon>
  );
});

IconMaterialFileUploadOff.displayName = 'OnesyIconMaterialFileUploadOff';

export default IconMaterialFileUploadOff;
