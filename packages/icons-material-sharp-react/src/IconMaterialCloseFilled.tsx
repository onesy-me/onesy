import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFilled'

      short_name='Close'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </Icon>
  );
});

IconMaterialCloseFilled.displayName = 'OnesyIconMaterialCloseFilled';

export default IconMaterialCloseFilled;
