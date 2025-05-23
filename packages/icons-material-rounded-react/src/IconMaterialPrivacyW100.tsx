import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyW100'

      short_name='Privacy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M405-661q5-2 11-2.5t12-.5q26 0 45 19t19 45v26l-87-87Zm375 285-84-84v90l-28-28v-290q0-14-9-23t-23-9H346l-28-28h318q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T806-574v188q0 10-9.5 13.5T780-376ZM636-212H220q-26 0-43-17t-17-43v-416q0-22 13-37.5t33-20.5l26 26h-12q-14 0-23 9t-9 23v416q0 14 9 23t23 9h196v-68q-60-5-103.5-45T259-452q-1-5 3-8.5t9-3.5q6 0 10.5 3.5t5.5 9.5q9 50 48.5 82.5T428-336q33 0 63.5-14t50.5-40l19 19q-23 28-54.5 44T440-308v68h196q14 0 23-9t9-23v-12l26 26q-5 20-20.5 33T636-212Zm116 52L476-436q-9 11-21.5 15.5T428-416q-26 0-45-19t-19-45v-68L128-784q-4-4-4.5-9.5T128-804q5-5 10-5t10 5l624 624q4 4 4.5 9.5T772-160q-5 5-10 5t-10-5ZM436-476Zm71-83Zm-91 319h24-24Z"/>
    </Icon>
  );
});

IconMaterialPrivacyW100.displayName = 'OnesyIconMaterialPrivacyW100';

export default IconMaterialPrivacyW100;
