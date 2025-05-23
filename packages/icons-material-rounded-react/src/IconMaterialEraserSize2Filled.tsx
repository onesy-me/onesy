import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEraserSize2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize2Filled'

      short_name='EraserSize2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z"/>
    </Icon>
  );
});

IconMaterialEraserSize2Filled.displayName = 'OnesyIconMaterialEraserSize2Filled';

export default IconMaterialEraserSize2Filled;
