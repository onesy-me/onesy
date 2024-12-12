import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h720v560H120Zm80-80h560v-400H200v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialCrop75.displayName = 'OnesyIconMaterialCrop75';

export default IconMaterialCrop75;
