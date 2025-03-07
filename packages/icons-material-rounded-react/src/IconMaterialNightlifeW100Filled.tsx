import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlifeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeW100Filled'

      short_name='Nightlife'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M274-214v-230L129.19-661.41Q119-676 127.75-692T154-708h268q17.5 0 26.25 16t-1.44 30.59L302-444v230h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H208q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66Zm-70-386h168l54-80H150l54 80Zm404.12 414q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.42-66.62Q568.83-374 608-374q17.39 0 33.19 6.5Q657-361 674-346v-332q0-12.75 8.63-21.38Q691.25-708 704-708h90q11 0 19.5 8.03t8.5 19.5q0 11.47-8.5 19.97Q805-652 794-652h-92v372q0 39.17-27.38 66.58Q647.24-186 608.12-186Z"/>
    </Icon>
  );
});

IconMaterialNightlifeW100Filled.displayName = 'OnesyIconMaterialNightlifeW100Filled';

export default IconMaterialNightlifeW100Filled;
