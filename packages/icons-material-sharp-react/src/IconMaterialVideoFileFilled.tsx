import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileFilled'

      short_name='VideoFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200ZM320-240h240v-80l80 42v-164l-80 42v-80H320v240Z"/>
    </Icon>
  );
});

IconMaterialVideoFileFilled.displayName = 'OnesyIconMaterialVideoFileFilled';

export default IconMaterialVideoFileFilled;
