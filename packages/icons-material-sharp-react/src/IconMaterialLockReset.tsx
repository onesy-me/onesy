import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockReset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockReset'

      short_name='LockReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120q-74 0-138.5-27.5T268-223l57-57q38 37 88 58.5T520-200q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198v7l73-73 57 56-170 170L30-490l57-56 73 74v-8q0-75 28.5-140.5t77-114q48.5-48.5 114-77T520-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T880-480q0 150-105 255T520-120ZM400-320v-200h40v-40q0-33 23.5-56.5T520-640q33 0 56.5 23.5T600-560v40h40v200H400Zm80-200h80v-40q0-17-11.5-28.5T520-600q-17 0-28.5 11.5T480-560v40Z"/>
    </Icon>
  );
});

IconMaterialLockReset.displayName = 'OnesyIconMaterialLockReset';

export default IconMaterialLockReset;
