import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Files'

      short_name='Files'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-560h320l80-80h400v640H80Zm153-280h207v-207L233-440Zm-73-40 160-160H160v160Zm0 120v120h640v-480H520v360H160Zm280-160Z"/>
    </Icon>
  );
});

IconMaterialFiles.displayName = 'OnesyIconMaterialFiles';

export default IconMaterialFiles;
