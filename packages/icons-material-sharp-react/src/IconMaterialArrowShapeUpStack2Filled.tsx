import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStack2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStack2Filled'

      short_name='ArrowShapeUpStack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-40v-120H160l320-360 320 360H600v120H360ZM160-360l320-360 320 360H693L480-600 267-360H160Zm0-200 320-360 320 360H693L480-800 267-560H160Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStack2Filled.displayName = 'OnesyIconMaterialArrowShapeUpStack2Filled';

export default IconMaterialArrowShapeUpStack2Filled;
