import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Splitscreen'

      short_name='Splitscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h720v320H120Zm80-80h560v-160H200v160Zm-80 480v-320h720v320H120Zm80-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreen.displayName = 'OnesyIconMaterialSplitscreen';

export default IconMaterialSplitscreen;
