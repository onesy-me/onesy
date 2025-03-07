import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastW100'

      short_name='East'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M776-467H145q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h631L573-698q-3.67-3.75-3.83-9.38-.17-5.62 3.83-9.79 3.67-3.83 9.33-3.83 5.67 0 9.67 4l215 215q5 5 7 10.13 2 5.14 2 11 0 5.87-2.05 11.47-2.04 5.6-6.95 10.4L592-244q-3.75 4-9.37 4-5.63 0-9.63-4-5-4-4.5-10t4.5-10l203-203Z"/>
    </Icon>
  );
});

IconMaterialEastW100.displayName = 'OnesyIconMaterialEastW100';

export default IconMaterialEastW100;
