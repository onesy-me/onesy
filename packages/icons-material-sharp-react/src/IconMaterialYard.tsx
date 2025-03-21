import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Yard'

      short_name='Yard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q0-100-70-170t-170-70q0 100 70 170t170 70Zm0-202q26 0 44-18t18-44v-6q8 6 16.5 9t19.5 3q26 0 44-18t18-44q0-20-9.5-35T604-576q17-6 26.5-21t9.5-35q0-26-18-44t-44-18q-11 0-19.5 3t-16.5 9v-6q0-26-18-44t-44-18q-26 0-44 18t-18 44v6q-8-6-16.5-9t-19.5-3q-26 0-44 18t-18 44q0 20 9.5 35t26.5 21q-17 6-26.5 21t-9.5 35q0 26 18 44t44 18q11 0 19.5-3t16.5-9v6q0 26 18 44t44 18Zm0-112q-26 0-44-17.5T418-576q0-26 18-44t44-18q26 0 44 18t18 44q0 27-18 44.5T480-514Zm0 314q100 0 170-70t70-170q-100 0-170 70t-70 170ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialYard.displayName = 'OnesyIconMaterialYard';

export default IconMaterialYard;
