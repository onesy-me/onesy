import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeW100'

      short_name='GarageHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.2-762q9.8 0 18.71 3 8.92 3 17.09 9l208 158q11.25 8.25 17.63 21 6.37 12.75 6.37 27v358q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-358q0-8-3.5-14.5T707-570L499-727q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v358q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-358q0-14.25 6.38-27 6.37-12.75 17.62-21l208-158q8.3-6 17.34-9 9.05-3 18.86-3ZM334-201h292v-132H334v132Zm0-160h292v-132H334v132Zm2 188q-12.75 0-21.37-8.63Q306-190.25 306-203v-288q0-12.75 8.63-21.38Q323.25-521 336-521h288q12.75 0 21.38 8.62Q654-503.75 654-491v288q0 12.75-8.62 21.37Q636.75-173 624-173H336Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeW100.displayName = 'OnesyIconMaterialGarageHomeW100';

export default IconMaterialGarageHomeW100;
