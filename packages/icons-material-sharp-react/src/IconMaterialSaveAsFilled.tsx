import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsFilled'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-40v-123l263-262 123 122L643-40H520ZM240-560h360v-160H240v160Zm543 296 37-39-37-37-38 38 38 38ZM440-120H120v-720h560l160 160v86L600-355v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35h4l-44 44v76Z"/>
    </Icon>
  );
});

IconMaterialSaveAsFilled.displayName = 'OnesyIconMaterialSaveAsFilled';

export default IconMaterialSaveAsFilled;
