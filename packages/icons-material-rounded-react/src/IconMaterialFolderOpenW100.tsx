import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenW100'

      short_name='FolderOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-212q-23 0-38.5-15.5T132-266v-422q0-23 18.5-41.5T192-748h162q12 0 23.5 5t19.5 13l62 62h346q6 0 10 4t4 10q0 6-4 10t-10 4H448l-80-80H192q-14 0-23 9t-9 23v448q0-14 5.5-10.5T180-242l76-255q6-19 22-31t36-12h512q30 0 48.5 24t9.5 53l-64 213q-5 17-19.5 27.5T768-212H186Zm23-28h555q11 0 19.5-6t11.5-17l62-208q5-16-5-28.5T826-512H314q-11 0-19.5 6T283-489l-74 249Zm-49-257v-223 223Zm49 257 74-249q3-11 5-17l2-6-3.5 12.5Q283-487 278-471l-62 208q-3 11-5 17l-2 6Z"/>
    </Icon>
  );
});

IconMaterialFolderOpenW100.displayName = 'OnesyIconMaterialFolderOpenW100';

export default IconMaterialFolderOpenW100;
