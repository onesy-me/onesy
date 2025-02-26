import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpW100'

      short_name='Help'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482.06-280q10.94 0 18.44-7.56 7.5-7.55 7.5-18.5 0-10.94-7.56-18.44-7.55-7.5-18.5-7.5-10.94 0-18.44 7.56-7.5 7.55-7.5 18.5 0 10.94 7.56 18.44 7.55 7.5 18.5 7.5Zm-1.89 148q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm2.02-170Q514-650 537-630.29q23 19.72 23 49.29 0 22-12 40t-28 33q-19.83 18.24-34.91 40.12Q470-446 467-420q-1 6 3.2 10t9.8 4q6 0 10-4t5-9q4-20 15.5-35.5t25.45-29.28Q556-504 572-527.83q16-23.84 16-53.17 0-42-31-69.5T484-678q-32 0-59 15.5T381-621q-3 5-1.92 10.14 1.09 5.15 5.85 7.81Q391-600 397-602q6-2 11-7 14-17 32.5-29t41.52-12Z"/>
    </Icon>
  );
});

IconMaterialHelpW100.displayName = 'OnesyIconMaterialHelpW100';

export default IconMaterialHelpW100;
