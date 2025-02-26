import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop75Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75Filled'

      short_name='Crop75'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h720v560H120Z"/>
    </Icon>
  );
});

IconMaterialCrop75Filled.displayName = 'OnesyIconMaterialCrop75Filled';

export default IconMaterialCrop75Filled;
