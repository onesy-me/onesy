import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepartition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Repartition'

      short_name='Repartition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m233-640 35 35q12 12 12 28.5T268-548q-12 12-28.5 12T211-548L108-652q-12-12-12-28t12-28l104-104q11-11 27.5-11t28.5 11q12 12 12 28.5T268-755l-35 35h447q66 0 113 47t47 113q0 66-47 113t-113 47H160q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h520q33 0 56.5-23.5T760-560q0-33-23.5-56.5T680-640H233ZM120-160v-80q0-33 23.5-56.5T200-320h560q33 0 56.5 23.5T840-240v80q0 33-23.5 56.5T760-80H200q-33 0-56.5-23.5T120-160Zm80 0h133v-80H200v80Zm213 0h133v-80H413v80Zm214 0h133v-80H627v80Z"/>
    </Icon>
  );
});

IconMaterialRepartition.displayName = 'OnesyIconMaterialRepartition';

export default IconMaterialRepartition;
