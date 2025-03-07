import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRttFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttFilled'

      short_name='Rtt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M425-120q-23 0-39-18t-12-41q3-19 17.5-31t33.5-12h49l82-516H456l-22 136q-3 19-17.5 31.5T382-558q-24 0-39.5-18.5T331-619l27-171q4-22 20.5-36t38.5-14h398q28 0 46 21t13 48l-27 169q-3 19-17.5 31.5T795-558q-24 0-40-18t-12-42l19-120H662l-82 516h33q23 0 39 18t12 41q-3 19-17.5 31T613-120H425ZM197-680q-19 0-30.5-14t-8.5-32q2-14 13-24t26-10h116l-13 80H197Zm-25 160q-19 0-30.5-14t-8.5-32q2-14 13-24t26-10h116l-13 80H172Zm-51 320q-18 0-30-14t-9-32q2-15 13-24.5t26-9.5h216l-12 80H121Zm26-160q-19 0-30.5-14t-8.5-32q2-14 13-24t26-10h216l-13 80H147Z"/>
    </Icon>
  );
});

IconMaterialRttFilled.displayName = 'OnesyIconMaterialRttFilled';

export default IconMaterialRttFilled;
