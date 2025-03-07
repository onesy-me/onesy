import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeW100Filled'

      short_name='Cake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-132q-11.05 0-18.52-8.5Q172-149 172-160v-168q0-24.75 17.63-42.38Q207.25-388 232-388h496q24.75 0 42.38 17.62Q788-352.75 788-328v168q0 11-8.5 19.5T760-132H198Zm54-284v-160q0-24.75 17.63-42.38Q287.25-636 312-636h154v-60q-17-11-28.5-24.5T426-751.85q0-11.15 3.91-20.58 3.91-9.44 11.73-17.24L469-817q1-1 11.29-5 1.71 0 10.71 5l27.36 27.33q7.82 7.8 11.73 17.24Q534-763 534-751.85q0 17.85-11.5 31.35T494-696v60h154q24.75 0 42.38 17.62Q708-600.75 708-576v160H252Z"/>
    </Icon>
  );
});

IconMaterialCakeW100Filled.displayName = 'OnesyIconMaterialCakeW100Filled';

export default IconMaterialCakeW100Filled;
