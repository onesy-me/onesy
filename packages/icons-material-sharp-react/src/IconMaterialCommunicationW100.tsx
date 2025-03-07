import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommunicationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationW100'

      short_name='Communication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m416-445-20-20q6-11 8.5-25t2.5-29q0-15-3-29t-9-24l20-20q10 14 15 33.5t5 39.5q0 20-4.5 40T416-445Zm76 75-20-20q23-29 33.5-62t10.5-68q0-35-10.5-68T472-649l20-20q26 32 39 70.5t13 78.5q0 40-13 78.5T492-370ZM200-506q-23 0-38.5-15.5T146-560q0-23 15.5-38.5T200-614q23 0 38.5 15.5T254-560q0 23-15.5 38.5T200-506ZM66-346v-2q0-15 9-26.5T99-393q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H66Zm694-160q-23 0-38.5-15.5T706-560q0-23 15.5-38.5T760-614q23 0 38.5 15.5T814-560q0 23-15.5 38.5T760-506ZM626-346v-2q0-15 9-26.5t24-18.5q23-11 48.5-16t52.5-5q27 0 52.5 5t48.5 16q15 7 24 18.5t9 26.5v2H626Z"/>
    </Icon>
  );
});

IconMaterialCommunicationW100.displayName = 'OnesyIconMaterialCommunicationW100';

export default IconMaterialCommunicationW100;
