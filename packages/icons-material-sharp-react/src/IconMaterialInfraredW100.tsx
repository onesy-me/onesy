import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInfraredW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfraredW100'

      short_name='Infrared'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m550-170-20-20q56-56 88-130.5T650-480q0-85-32-159.5T530-770l20-20q60 60 94 139.3 34 79.29 34 170.7 0 91.41-34 170.7Q610-230 550-170Zm-91-91-20-20q38-38 60.5-89T522-480q0-59-22.5-110T439-679l20-20q42 41.58 66.5 97.79Q550-545 550-480t-24.5 121.21Q501-302.58 459-261Zm-90-90-20-20q21.06-21.25 33.03-49.25Q394-448.26 394-480.13t-11.97-59.78Q370.06-567.83 349-589l20-20q25 25 39 58.23 14 33.24 14 71Q422-442 408-409q-14 33-39 58ZM213-186v-588h28v240q22 1 37.5 16.6 15.5 15.59 15.5 37.5 0 21.9-15.5 37.4T241-426v240h-28Z"/>
    </Icon>
  );
});

IconMaterialInfraredW100.displayName = 'OnesyIconMaterialInfraredW100';

export default IconMaterialInfraredW100;
