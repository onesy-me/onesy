import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingFilled'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-200q0-33 23.5-56.5T160-480h166q15 0 26 10t13 24q5 34 40 60t75 26q40 0 75-26t40-60q2-14 13-24t26-10h166q33 0 56.5 23.5T880-400v200q0 33-23.5 56.5T800-120H160Zm516-436q-11-11-11-28t11-28l86-86q11-11 28-11t28 11q11 11 11 28t-11 28l-86 86q-11 11-28 11t-28-11Zm-392 0q-11 11-28 11t-28-11l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l86 86q11 11 11 28t-11 28Zm196-84q-17 0-28.5-11.5T440-680v-120q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v120q0 17-11.5 28.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialUpcomingFilled.displayName = 'OnesyIconMaterialUpcomingFilled';

export default IconMaterialUpcomingFilled;
