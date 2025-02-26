import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoubleArrow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrow'

      short_name='DoubleArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrow.displayName = 'OnesyIconMaterialDoubleArrow';

export default IconMaterialDoubleArrow;
