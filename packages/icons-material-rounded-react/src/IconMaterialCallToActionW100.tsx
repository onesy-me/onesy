import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToActionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionW100'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm140-66h360q14 0 24-10t10-24q0-14-10-24t-24-10H300q-14 0-24 10t-10 24q0 14 10 24t24 10Z"/>
    </Icon>
  );
});

IconMaterialCallToActionW100.displayName = 'OnesyIconMaterialCallToActionW100';

export default IconMaterialCallToActionW100;
