import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordRoseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRoseFilled'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-484 484-644l236-236h160v160L644-484ZM170-64 64-170l144-145-88-88 84-84 62 61 48-48 160 160-48 48 62 61-85 85-88-88L170-64Zm709-72-56 56-466-464q-49 30-107 23.5T150-569l-25-25 27-28q26-27 63.5-26.5T279-622l78 78q9-5 17-11.5t16-14.5q7-7 13-15t11-16l-78-78q-51-50-121-50T96-678l-27 27-29-29 240-239 110 110q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q6-30 20.5-56t34-48.5q19.5-22.5 44.5-41t52-32.5q39 48 60 105t9 117q-11 51-42.5 91T797-218l82 82Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseFilled.displayName = 'OnesyIconMaterialSwordRoseFilled';

export default IconMaterialSwordRoseFilled;
