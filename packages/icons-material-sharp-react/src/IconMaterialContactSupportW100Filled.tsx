import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactSupportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportW100Filled'

      short_name='ContactSupport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M532-170v-82h-72q-120 0-204-84t-84-204q0-120 84-204t204-84q60 0 112.5 22.5T664-744q39 39 61.5 91.5T748-540q0 57-16 109.5t-44.5 100Q659-283 619-242.5T532-170Zm-70-172q11 0 18.5-7.5T488-368q0-11-7.5-18.5T462-394q-11 0-18.5 7.5T436-368q0 11 7.5 18.5T462-342Zm-14-114h28q2-23 10.5-38t37.5-44q17-17 26.5-34t9.5-40q0-41-28.5-65.5T462-702q-35 0-59.5 19T366-638l26 10q9-18 25-32t45-14q36 0 53 19.5t17 42.5q0 21-10.5 35T494-546q-27 24-36.5 45t-9.5 45Z"/>
    </Icon>
  );
});

IconMaterialContactSupportW100Filled.displayName = 'OnesyIconMaterialContactSupportW100Filled';

export default IconMaterialContactSupportW100Filled;
