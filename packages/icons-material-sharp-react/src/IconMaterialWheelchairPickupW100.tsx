import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWheelchairPickupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupW100'

      short_name='WheelchairPickup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-730q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Zm-68 624v-258h-68v-294h272v168q-46 31-78 87t-32 123q0 43 12.5 80t29.5 60v34H192Zm350 2q-72 0-124-52t-52-124q0-49 26-92t74-66v31q-34 22-53 54.5T394-280q0 63 42.5 105.5T542-132q54 0 97.5-36.5T689-265h28q-8 72-57 116.5T542-104Zm302-104-92-138H546v-268h28v240h194l100 151-24 15Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupW100.displayName = 'OnesyIconMaterialWheelchairPickupW100';

export default IconMaterialWheelchairPickupW100;
