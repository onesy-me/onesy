import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVitalSignsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalSignsW100'

      short_name='VitalSigns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382.11-251q-8.11 0-14.6-5.08-6.48-5.07-9.51-12.92l-80-197H108q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h169q9 0 16.5 5.5T305-475l77 191 172-408q2.99-7.85 9.39-12.92 6.4-5.08 14.5-5.08 8.11 0 14.6 5.08 6.48 5.07 9.51 12.92l82 198h170q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H684q-9.34 0-16.17-5.5Q661-477 657-485l-79-192-172 408q-2.99 7.85-9.39 12.92-6.4 5.08-14.5 5.08Z"/>
    </Icon>
  );
});

IconMaterialVitalSignsW100.displayName = 'OnesyIconMaterialVitalSignsW100';

export default IconMaterialVitalSignsW100;
