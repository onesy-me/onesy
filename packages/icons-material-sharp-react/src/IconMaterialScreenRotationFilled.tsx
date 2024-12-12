import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationFilled'

      short_name='ScreenRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-128 128-550l282-282 422 422-282 282ZM480 0q-99 0-186.5-37.5t-153-103Q75-206 37.5-293.5T0-480h80q0 71 24 136t66.5 117Q213-175 272-138.5T401-87L296-192l56-56L588-12q-26 6-53.5 9T480 0Zm400-480q0-71-24-136t-66.5-117Q747-785 688-821.5T559-873l105 105-56 56-236-236q26-6 53.5-9t54.5-3q99 0 186.5 37.5t153 103q65.5 65.5 103 153T960-480h-80Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationFilled.displayName = 'OnesyIconMaterialScreenRotationFilled';

export default IconMaterialScreenRotationFilled;
