import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearch'

      short_name='PersonSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560ZM856-48 756-148q-21 12-45 20t-51 8q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 27-8 51t-20 45l100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-540-40v-31q0-34 17-63t47-44q42-22 93.5-38.5T383-438q17-2 29 10t12 29q0 17-12 29.5T383-355q-57 7-96 21t-66 28q-10 5-15.5 14.5T200-271v31h184q17 0 28.5 11.5T424-200q0 17-11.5 28.5T384-160H200q-33 0-56.5-23.5T120-240Zm320-400Zm-33 400Z"/>
    </Icon>
  );
});

IconMaterialPersonSearch.displayName = 'OnesyIconMaterialPersonSearch';

export default IconMaterialPersonSearch;
