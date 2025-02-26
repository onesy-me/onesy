import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquare'

      short_name='EditSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h437l-80 80H200v560h560v-278l80-80v438H120Zm360-360ZM360-360v-170l425-425 167 171-422 424H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
    </Icon>
  );
});

IconMaterialEditSquare.displayName = 'OnesyIconMaterialEditSquare';

export default IconMaterialEditSquare;
