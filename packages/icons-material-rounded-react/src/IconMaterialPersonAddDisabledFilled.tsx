import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonAddDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledFilled'

      short_name='PersonAddDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m764-85-84-83v8H120q-33 0-56.5-23.5T40-240v-32q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q13 0 25.5.5T410-438l-42-42h-8q-66 0-113-47t-47-113v-8L84-764q-12-12-11.5-28.5T85-821q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T764-85Zm-44-435h-80q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h80v-80q0-17 11.5-28.5T760-720q17 0 28.5 11.5T800-680v80h80q17 0 28.5 11.5T920-560q0 17-11.5 28.5T880-520h-80v80q0 17-11.5 28.5T760-400q-17 0-28.5-11.5T720-440v-80Zm-216-52L292-784q15-8 32.5-12t35.5-4q66 0 113 47t47 113q0 18-4 35.5T504-572Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledFilled.displayName = 'OnesyIconMaterialPersonAddDisabledFilled';

export default IconMaterialPersonAddDisabledFilled;
