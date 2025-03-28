import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landslide'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80h560q50 0 72-44t-8-84L653-382q-7-9-15-15.5T619-408l-179-72-96-128q-11-15-28-23.5t-36-8.5H160q-33 0-56.5 23.5T80-560v400q0 33 23.5 56.5T160-80Zm0-80v-64l80 26 361-120 119 158H160Zm80-122-80-27v-75l80 26 158-52 96 43-254 85Zm533-133 111-49q17-8 26.5-22.5T920-519v-73q0-21-13.5-37T873-650l-105-24q-14-3-26.5.5T718-662l-55 44q-11 8-17 20.5t-6 26.5v62q0 14 6 26.5t17 20.5l49 39q14 11 30 13t31-5Zm-533-27-80-27v-91h120l65 83-105 35Zm512-51-32-25v-44l40-32 80 18v44l-88 39ZM509-652l133-53q17-7 27.5-22t10.5-34v-110q0-22-13.5-38T632-930l-128-25q-12-2-23.5 0t-21.5 9l-72 48q-13 8-20 21.5t-7 28.5v96q0 15 7 28.5t20 21.5l67 44q12 8 26.5 9.5T509-652Zm-20-78-49-33v-74l57-38 103 21v80l-111 44Z"/>
    </Icon>
  );
});

IconMaterialLandslide.displayName = 'OnesyIconMaterialLandslide';

export default IconMaterialLandslide;
