import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFramePersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonW100Filled'

      short_name='FramePerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-486q-39 0-66.5-27.5T386-580q0-38 27.5-66t66.5-28q38 0 66 28t28 66q0 39-28 66.5T480-486ZM266-316v-20q0-15 7.5-27.5T294-384q42-25 89.5-37.5T480-434q49 0 96.5 12.5T666-384q13 8 20.5 20.5T694-336v20q0 13-8.5 21.5T664-286H296q-13 0-21.5-8.5T266-316Zm-74 184q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 12 10 22t22 10h114q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm-60-522v-114q0-26 17-43t43-17h114q6 0 10 4t4 10q0 6-4 10t-10 4H192q-12 0-22 10t-10 22v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm636 522H654q-6 0-10-4t-4-10q0-6 4-10t10-4h114q12 0 22-10t10-22v-114q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17Zm32-522v-114q0-12-10-22t-22-10H654q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialFramePersonW100Filled.displayName = 'OnesyIconMaterialFramePersonW100Filled';

export default IconMaterialFramePersonW100Filled;
