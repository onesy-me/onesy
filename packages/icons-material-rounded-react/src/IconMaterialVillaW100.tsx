import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVillaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaW100'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-202v-361q0-18.67 10.43-33.97Q192.86-612.28 210-619l349-134q15-6 28 3.07 13 9.06 13 24.93v297h76q0-23.1 16.43-39.55Q708.86-484 731.93-484t39.57 16.45Q788-451.1 788-428v226q0 13-8.5 21.5T758-172H202q-13 0-21.5-8.5T172-202Zm28 2h212v-168q0-24.75 17.63-42.38Q447.25-428 472-428h100v-301L220-593q-9 4-14.5 12t-5.5 18v363Zm240 0h132v-56q0-11 8.5-19.5T600-284q11 0 19.5 8.5T628-256v56h132v-200H472q-14 0-23 9t-9 23v168Zm-54-265Zm214 165Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialVillaW100.displayName = 'OnesyIconMaterialVillaW100';

export default IconMaterialVillaW100;
