import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOff'

      short_name='FlashOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-880h400l-80 280h160L643-431l-57-57 22-32h-54l-47-47 67-233H360v86l-80-80v-86ZM400-80v-320H280v-166L55-791l57-57 736 736-57 57-241-241L400-80Zm73-521Z"/>
    </Icon>
  );
});

IconMaterialFlashOff.displayName = 'OnesyIconMaterialFlashOff';

export default IconMaterialFlashOff;
