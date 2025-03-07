import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRememberMeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeW100'

      short_name='RememberMe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-588h400v-66H280v66Zm200 402q-54 0-105 15.5T280-312v98h400v-98q-44-29-95-44.5T480-372Zm0-28q54 0 104.5 14.06T680-346v-400H280v400q45-25.88 95.5-39.94Q426-400 480-400Zm-.12-66q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5Zm.12-28q-27 0-46.5-19.5T414-560q0-27 19.5-46.5T480-626q27 0 46.5 19.5T546-560q0 27-19.5 46.5T480-494Zm0 280h200-400 200Zm0-346Zm0-214Zm0 588Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100.displayName = 'OnesyIconMaterialRememberMeW100';

export default IconMaterialRememberMeW100;
