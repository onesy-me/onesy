import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M283-347q-14-8-22.5-21.88Q252-382.75 252-400v-144l-54-30q-8-5-12-11.53-4-6.52-4-14.5 0-7.97 4-14.47 4-6.5 12-11.5l253.26-138.24q6.74-3.76 13.95-5.26 7.2-1.5 14.79-1.5 7.59 0 14.79 1.5 7.21 1.5 13.99 5.23L796-609q8 5 12 11.97 4 6.96 4 15.03v204q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-206l-76 40v144q0 17.25-8.5 31.12Q691-355 677-347l-168 91q-7 4-14.21 5.5-7.2 1.5-14.79 1.5-7.59 0-14.79-1.5Q458-252 451-256l-168-91Zm185-111q7 4 12.5 4t12.5-4l260-142-260-141q-7-4-12.5-4t-12.5 4L207-600l261 142Zm-1 179q7 4 13 4t13-4l172-93q8-5 11.5-11.5T680-400v-128l-171 93q-7 4-14 5.5t-15 1.5q-8 0-15-1.5t-14-5.5l-171-93v128q0 8 3.5 15.5T295-372l172 93Zm13-174Zm0 51Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100.displayName = 'OnesyIconMaterialSchoolW100';

export default IconMaterialSchoolW100;
