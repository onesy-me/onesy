import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMasksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MasksW100Filled'

      short_name='Masks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-287q-31 0-60-9t-55-26q-36-2-74-15.5T222-381q-31-30-51-79t-20-122v-17q0-31 21.5-52.5T225-673q29 0 50 23.5t24 57.5q29-8 47-16.5t34-16.5q25-14 47.5-22.5T480-656q30 0 52.5 8.5T580-625q16 8 34 16.5t47 16.5q3-35 24-58t50-23q31 0 52.5 21.5T809-599v17q0 73-20 122t-51 79q-31 30-69 43.5T595-322q-26 17-55 26t-60 9Zm-153-67q-24-27-40-64t-16-79v-102q0-19-13.5-32.5T225-645q-19 0-32.5 13.5T179-599v17q0 118 47 164.5T327-354Zm54-155q14-5 27-11t26-14q11-7 22-12t24-5q14 0 24 4.5t22 12.5q11 7 23.5 13.5T579-509v-30q-13-5-21.5-9.5T540-558q-14-8-27-14.5t-33-6.5q-20 0-33.5 6.5T419-558q-9 5-17.5 9.5T381-539v30Zm251 156q55-17 102-64t47-165v-17q0-19-13.5-32.5T735-645q-19 0-32.5 13.5T689-599v102q0 42-16 80t-41 64Z"/>
    </Icon>
  );
});

IconMaterialMasksW100Filled.displayName = 'OnesyIconMaterialMasksW100Filled';

export default IconMaterialMasksW100Filled;
