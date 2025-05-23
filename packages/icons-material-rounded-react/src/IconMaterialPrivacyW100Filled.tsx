import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyW100Filled'

      short_name='Privacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M752-160 128-784q-4-4-4.5-9.5T128-804q5-5 10-5t10 5l624 624q4 4 4.5 9.5T772-160q-5 5-10 5t-10-5Zm28-216-84-84v90L492-574v-26q0-26-19-45t-45-19q-6 0-12 .5t-11 2.5l-87-87h318q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T806-574v188q0 10-9.5 13.5T780-376ZM220-212q-26 0-43-17t-17-43v-416q0-22 13-37.5t33-20.5l488 488q-5 20-20.5 33T636-212H440v-96q35-3 66.5-19t54.5-44l-19-19q-20 26-50.5 40T428-336q-53 0-92.5-32.5T287-451q-1-6-5.5-9.5T271-464q-5 0-9 3.5t-3 8.5q10 59 53.5 99T416-308v96H220Zm144-336v68q0 26 19 45t45 19q14 0 26.5-4.5T476-436L364-548Z"/>
    </Icon>
  );
});

IconMaterialPrivacyW100Filled.displayName = 'OnesyIconMaterialPrivacyW100Filled';

export default IconMaterialPrivacyW100Filled;
