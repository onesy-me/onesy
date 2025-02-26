import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartDiamond = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamond'

      short_name='LineStartDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-313 167-167-167-167-167 167 167 167Zm0 113L80-480l280-280 240 240h280v80H600L360-200Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamond.displayName = 'OnesyIconMaterialLineStartDiamond';

export default IconMaterialLineStartDiamond;
