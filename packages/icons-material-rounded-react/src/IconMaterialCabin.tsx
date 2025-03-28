import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCabin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cabin'

      short_name='Cabin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-36l-58-44H298l-58 44v36Zm162-160h156l-78-59-78 59ZM160-200v-295l-40 31q-14 10-30 8t-26-16q-10-14-8-30t15-26l89-68v-84q0-17 11.5-28.5T200-720q17 0 28.5 11.5T240-680v23l191-146q22-17 49-17t49 17l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v295q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200Zm52-560q-23 0-35.5-19t-1.5-39q17-29 44.5-45.5T280-880q11 0 21-5.5t15-15.5q5-9 13.5-14t19.5-5q23 0 35 19t1 39q-17 29-44.5 45.5T280-800q-11 0-21 5t-15 16q-5 9-13 14t-19 5Z"/>
    </Icon>
  );
});

IconMaterialCabin.displayName = 'OnesyIconMaterialCabin';

export default IconMaterialCabin;
