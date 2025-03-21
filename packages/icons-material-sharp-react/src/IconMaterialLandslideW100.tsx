import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandslideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideW100'

      short_name='Landslide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132h644L602-361l-198-86-110-141H132v456Zm28-28v-91l80 26 343-114 137 179H160Zm80-95-80-26v-120l80 26 147-49 157 68-304 101Zm468-185 120-54v-84l-115-26-61 49v70l56 45Zm-468 35-80-26v-129h120l88 113-128 42Zm472-68-32-25v-44l40-32 80 18v44l-88 39ZM486-658l142-57v-122l-137-28-79 53v104l74 50Zm3-32-49-33v-74l57-38 103 21v80l-111 44Z"/>
    </Icon>
  );
});

IconMaterialLandslideW100.displayName = 'OnesyIconMaterialLandslideW100';

export default IconMaterialLandslideW100;
