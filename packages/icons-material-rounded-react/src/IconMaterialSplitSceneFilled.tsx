import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneFilled'

      short_name='SplitScene'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160q17 0 28.5 11.5T360-760v560q0 17-11.5 28.5T320-160H160Zm320 80q-17 0-28.5-11.5T440-120v-720q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v40h280q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H520v40q0 17-11.5 28.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneFilled.displayName = 'OnesyIconMaterialSplitSceneFilled';

export default IconMaterialSplitSceneFilled;
