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
      <path d="M105.96-252q-5.96 0-9.96-4.02-4-4.03-4-9.98v-468q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v334h346v-240q0-11 8.5-19.5T494-668h266q44.55 0 76.28 31.72Q868-604.55 868-560v294q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H120v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm173.92-234q-30.88 0-52.38-21.62-21.5-21.62-21.5-52.5t21.62-52.38q21.62-21.5 52.5-21.5t52.38 21.62q21.5 21.62 21.5 52.5t-21.62 52.38q-21.62 21.5-52.5 21.5ZM494-400h346v-160q0-33-23.5-56.5T760-640H494v240ZM280-514q19 0 32.5-13.5T326-560q0-19-13.5-32.5T280-606q-19 0-32.5 13.5T234-560q0 19 13.5 32.5T280-514Zm0-46Zm214-80v240-240Z"/>
    </Icon>
  );
});

IconMaterialHotelW100.displayName = 'OnesyIconMaterialHotelW100';

export default IconMaterialHotelW100;
