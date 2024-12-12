import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-299 190-190-20-20-170 170-86-86-20 20 106 106ZM212-132v-696h374l162 162v534H212Zm360-520v-148H240v640h480v-492H572ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialTaskW100.displayName = 'OnesyIconMaterialTaskW100';

export default IconMaterialTaskW100;
