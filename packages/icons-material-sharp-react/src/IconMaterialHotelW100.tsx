import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHotelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelW100'

      short_name='Hotel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-252v-496h28v348h346v-268h402v416h-28v-120H120v120H92Zm187.88-234q-30.88 0-52.38-21.62-21.5-21.62-21.5-52.5t21.62-52.38q21.62-21.5 52.5-21.5t52.38 21.62q21.5 21.62 21.5 52.5t-21.62 52.38q-21.62 21.5-52.5 21.5ZM494-400h346v-240H494v240ZM280-514q19 0 32.5-13.5T326-560q0-19-13.5-32.5T280-606q-19 0-32.5 13.5T234-560q0 19 13.5 32.5T280-514Zm0-46Zm214-80v240-240Z"/>
    </Icon>
  );
});

IconMaterialHotelW100.displayName = 'OnesyIconMaterialHotelW100';

export default IconMaterialHotelW100;
