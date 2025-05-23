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
      <path d="M312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v656q0 24.75-17.62 42.37Q672.75-92 648-92H312Zm-32-94v34q0 14 9 23t23 9h336q14 0 23-9t9-23v-34H280Zm0-588h400v-34q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v34Zm200 402q-54 0-105 15.5T280-312v98h400v-98q-44-29-95-44.5T480-372Zm0-28q54 0 104.5 14.06T680-346v-400H280v400q45-25.88 95.5-39.94Q426-400 480-400Zm-.12-66q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5Zm.12-28q-27 0-46.5-19.5T414-560q0-27 19.5-46.5T480-626q27 0 46.5 19.5T546-560q0 27-19.5 46.5T480-494Zm0 280h200-400 200Zm0-346Zm0-214Zm0 588Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100.displayName = 'OnesyIconMaterialRememberMeW100';

export default IconMaterialRememberMeW100;
