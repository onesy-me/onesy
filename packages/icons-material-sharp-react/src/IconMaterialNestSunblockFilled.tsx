import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestSunblockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestSunblockFilled'

      short_name='NestSunblock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-680v-120h80v120H80Zm0 520v-120h80v120H80Zm210-433-57-57 85-85 57 57-85 85Zm28 368-85-85 57-57 85 85-57 57Zm2-215v-80h240l-72-96 64-48 168 224H320Zm440 240v-560h120v560H760ZM80-320v-80q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-80q66 0 113 47t47 113q0 66-47 113T80-320Z"/>
    </Icon>
  );
});

IconMaterialNestSunblockFilled.displayName = 'OnesyIconMaterialNestSunblockFilled';

export default IconMaterialNestSunblockFilled;
