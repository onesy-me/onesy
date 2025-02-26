import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadgeFilled'

      short_name='EvMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280h240v-80H280v-80h120v-80H280v-80h160v-80H200v400Zm380 0h80l100-400h-80l-60 240-60-240h-80l100 400ZM40-120v-720h880v720H40Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadgeFilled.displayName = 'OnesyIconMaterialEvMobiledataBadgeFilled';

export default IconMaterialEvMobiledataBadgeFilled;
