import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStack'

      short_name='ArrowShapeUpStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-120H160l320-360 320 360H600v120H360Zm80-80h80v-120h102L480-520 338-360h102v120ZM160-480l320-360 320 360H693L480-720 267-480H160Zm320 120Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStack.displayName = 'OnesyIconMaterialArrowShapeUpStack';

export default IconMaterialArrowShapeUpStack;
