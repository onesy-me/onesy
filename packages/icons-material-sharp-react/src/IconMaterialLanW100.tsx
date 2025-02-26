import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-106v-228h120v-160h200v-132H346v-228h268v228H494v132h200v160h120v228H546v-228h120v-132H294v132h120v228H146Zm228-548h212v-172H374v172ZM174-134h212v-172H174v172Zm400 0h212v-172H574v172Zm-94-520Zm-94 348Zm188 0Z"/>
    </Icon>
  );
});

IconMaterialLanW100.displayName = 'OnesyIconMaterialLanW100';

export default IconMaterialLanW100;
