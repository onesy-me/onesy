import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProblemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProblemW100'

      short_name='Problem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280.07-312q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q268-368 260-359.93t-8 20q0 11.93 8.07 19.93t20 8Zm-.03-116q5.96 0 9.96-4.02 4-4.03 4-9.98v-192q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v192q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM440-386h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H440q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-160h240q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H440q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialProblemW100.displayName = 'OnesyIconMaterialProblemW100';

export default IconMaterialProblemW100;
