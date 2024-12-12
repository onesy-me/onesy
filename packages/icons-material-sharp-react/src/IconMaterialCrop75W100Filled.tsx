import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75W100Filled'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-456h616v456H172Z"/>
    </Icon>
  );
});

IconMaterialCrop75W100Filled.displayName = 'OnesyIconMaterialCrop75W100Filled';

export default IconMaterialCrop75W100Filled;
