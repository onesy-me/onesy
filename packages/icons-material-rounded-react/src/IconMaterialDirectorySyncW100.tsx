import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectorySyncW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectorySyncW100'

      short_name='DirectorySync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-480q0-143 107-238.5T506-814v-24q0-9 8-13t16 1l75 56q12 9 12 24t-12 24l-75 56q-8 5-16 1t-8-13v-24q-110 0-191 70t-81 176q0 36 10 70t30 64q8 12 6 25.5T267-299l-11 8q-14 11-30.5 8.5T199-299q-26-40-39.5-86.5T146-480Zm308 334v24q0 9-8 13t-16-1l-75-56q-12-9-12-24t12-24l75-56q8-5 16-1t8 13v24q110 0 191-70t81-176q0-36-10-70.5T686-615q-8-12-6-25.5t13-21.5l11-8q14-11 30.5-8.5T761-662q26 41 39.5 87t13.5 95q0 143-107 238.5T454-146Z"/>
    </Icon>
  );
});

IconMaterialDirectorySyncW100.displayName = 'OnesyIconMaterialDirectorySyncW100';

export default IconMaterialDirectorySyncW100;
