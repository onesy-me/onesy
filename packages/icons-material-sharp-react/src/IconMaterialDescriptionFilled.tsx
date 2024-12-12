import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDescriptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionFilled'

      short_name='Description'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
});

IconMaterialDescriptionFilled.displayName = 'OnesyIconMaterialDescriptionFilled';

export default IconMaterialDescriptionFilled;
