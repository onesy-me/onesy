import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10SelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectW100'

      short_name='Timer10Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-274h148q14 0 23-9t9-23v-348q0-14-9-23t-23-9H376q-14 0-23 9t-9 23v348q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h148q26 0 43 17t17 43v348q0 26-17 43t-43 17H376ZM156-686H90q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-9.88q4.09-4 9.92-4h49q18.75 0 31.88 13.12Q184-687.75 184-669v409q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-9.88-4.08q-4-4.09-4-9.92v-426Zm700 440H710q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h146v-92H724q-11.93 0-19.96-8.04Q696-382.07 696-394v-92q0-11.93 8.04-19.96Q712.07-514 724-514h146q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H724v92h132q11.93 0 19.96 8.04Q884-377.93 884-366v92q0 11.93-8.04 19.96Q867.93-246 856-246Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectW100.displayName = 'OnesyIconMaterialTimer10SelectW100';

export default IconMaterialTimer10SelectW100;
