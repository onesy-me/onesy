import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalAtmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmW100'

      short_name='LocalAtm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-374H400q-6 0-10 4t-4 10q0 6 4 10t10 4h66v26q0 6 4 10t10 4q6 0 10-4t4-10v-26h52q11 0 19.5-8.5T574-374v-92q0-11-8.5-19.5T546-494H414v-92h146q6 0 10-4t4-10q0-6-4-10t-10-4h-66v-26q0-6-4-10t-10-4q-6 0-10 4t-4 10v26h-52q-11 0-19.5 8.5T386-586v92q0 11 8.5 19.5T414-466h132v92ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmW100.displayName = 'OnesyIconMaterialLocalAtmW100';

export default IconMaterialLocalAtmW100;
