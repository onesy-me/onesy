import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStackFilled'

      short_name='ArrowShapeUpStack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-120H160l320-360 320 360H600v120H360ZM160-480l320-360 320 360H693L480-720 267-480H160Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStackFilled.displayName = 'OnesyIconMaterialArrowShapeUpStackFilled';

export default IconMaterialArrowShapeUpStackFilled;
