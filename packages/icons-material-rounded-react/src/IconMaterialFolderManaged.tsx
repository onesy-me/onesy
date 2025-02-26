import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderManaged = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderManaged'

      short_name='FolderManaged'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-200q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200Zm-8 120q-14 0-24.5-9T674-112l-6-28q-12-5-22.5-10.5T624-164l-29 9q-13 4-25.5-1T550-172l-8-14q-7-12-5-26t13-23l22-19q-2-12-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T668-420l6-29q3-14 13.5-22.5T712-480h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T816-396l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 12 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T772-140l-6 29q-3 14-13.5 22.5T728-80h-16ZM160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v80q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-80H447l-80-80H160v480h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Z"/>
    </Icon>
  );
});

IconMaterialFolderManaged.displayName = 'OnesyIconMaterialFolderManaged';

export default IconMaterialFolderManaged;
