import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowShapeUpStack2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowShapeUpStack2'

      short_name='ArrowShapeUpStack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-40v-120H160l320-360 320 360H600v120H360Zm80-80h80v-120h102L480-400 338-240h102v120ZM160-360l320-360 320 360H693L480-600 267-360H160Zm0-200 320-360 320 360H693L480-800 267-560H160Zm320 320Z"/>
    </Icon>
  );
});

IconMaterialArrowShapeUpStack2.displayName = 'OnesyIconMaterialArrowShapeUpStack2';

export default IconMaterialArrowShapeUpStack2;
