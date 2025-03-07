import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderZipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipW100'

      short_name='FolderZip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-480v-80h80v80h-80Zm0 80h-80v-80h80v80Zm0 80v-80h80v80h-80ZM448-640l-80-80H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h368v-80h80v80h128q14 0 23-9t9-23v-336q0-14-9-23t-23-9H640v80h-80v-80H448ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm-32-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFolderZipW100.displayName = 'OnesyIconMaterialFolderZipW100';

export default IconMaterialFolderZipW100;
