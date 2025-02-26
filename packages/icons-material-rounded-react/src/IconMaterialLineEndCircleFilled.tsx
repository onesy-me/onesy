import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleFilled'

      short_name='LineEndCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-240q-90 0-156.5-57T403-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h283q14-86 80.5-143T640-720q100 0 170 70t70 170q0 100-70 170t-170 70Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleFilled.displayName = 'OnesyIconMaterialLineEndCircleFilled';

export default IconMaterialLineEndCircleFilled;
