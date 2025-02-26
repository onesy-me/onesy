import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckW100'

      short_name='LibraryAddCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m482-476-76-76q-4-4-9.5-4.5T386-552q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l159-159q4-4 4.5-9.5T662-636q-5-5-10-5t-10 5L482-476ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckW100.displayName = 'OnesyIconMaterialLibraryAddCheckW100';

export default IconMaterialLibraryAddCheckW100;
