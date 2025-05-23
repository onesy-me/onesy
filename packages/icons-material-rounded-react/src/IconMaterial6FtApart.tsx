import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6FtApart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6FtApart'

      short_name='6FtApart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-80q-8 0-14-6t-6-14v-120q0-8 6-14t14-6h80q8 0 14 6t6 14q0 8-6 14t-14 6h-60v20h60q8 0 14 6t6 14v60q0 8-6 14t-14 6h-80Zm200-60v40q0 8-6 14t-14 6q-8 0-14-6t-6-14v-120q0-8 6-14t14-6h60q8 0 14 6t6 14q0 8-6 14t-14 6h-40v20h20q8 0 14 6t6 14q0 8-6 14t-14 6h-20Zm120-60h-20q-8 0-14-6t-6-14q0-8 6-14t14-6h80q8 0 14 6t6 14q0 8-6 14t-14 6h-20v100q0 8-6 14t-14 6q-8 0-14-6t-6-14v-100Zm-300 80h40v-20h-40v20ZM205-360l17 17q8 9 8 21t-9 21q-9 9-21 9t-21-9l-71-71q-12-12-12-28t12-28l71-71q9-9 21-9t21 9q9 9 9 21t-9 21l-17 17h551l-17-17q-8-9-8-21t9-21q9-9 21-9t21 9l71 71q12 12 12 28t-12 28l-71 71q-9 9-21 9t-21-9q-9-9-9-21t9-21l17-17H205ZM80-560v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H80Zm480 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H560ZM240-720q-33 0-56.5-23.5T160-800q0-33 23.5-56.5T240-880q33 0 56.5 23.5T320-800q0 33-23.5 56.5T240-720Zm480 0q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720Z"/>
    </Icon>
  );
});

IconMaterial6FtApart.displayName = 'OnesyIconMaterial6FtApart';

export default IconMaterial6FtApart;
