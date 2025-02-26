import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='House'

      short_name='House'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160q-33 0-56.5-23.5T200-240v-286l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l111 85v-22q0-25 17.5-42.5T700-800q25 0 42.5 17.5T760-740v114l128 98q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v286q0 33-23.5 56.5T680-160h-80q-33 0-56.5-23.5T520-240v-160h-80v160q0 33-23.5 56.5T360-160h-80Zm0-80h80v-160q0-33 23.5-56.5T440-480h80q33 0 56.5 23.5T600-400v160h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-160q0-33 23.5-56.5T440-480h80q33 0 56.5 23.5T600-400v160-160q0-33-23.5-56.5T520-480h-80q-33 0-56.5 23.5T360-400v160Z"/>
    </Icon>
  );
});

IconMaterialHouse.displayName = 'OnesyIconMaterialHouse';

export default IconMaterialHouse;
