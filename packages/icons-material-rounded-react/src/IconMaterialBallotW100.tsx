import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M646-560q6 0 10-4t4-10q0-6-4-10t-10-4H494q-6 0-10 4t-4 10q0 6 4 10t10 4h152Zm0 188q6 0 10-4t4-10q0-6-4-10t-10-4H494q-6 0-10 4t-4 10q0 6 4 10t10 4h152ZM360-534q17 0 28.5-11.5T400-574q0-17-11.5-28.5T360-614q-17 0-28.5 11.5T320-574q0 17 11.5 28.5T360-534Zm0 188q17 0 28.5-11.5T400-386q0-17-11.5-28.5T360-426q-17 0-28.5 11.5T320-386q0 17 11.5 28.5T360-346ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialBallotW100.displayName = 'OnesyIconMaterialBallotW100';

export default IconMaterialBallotW100;
