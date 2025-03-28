import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResponsiveLayoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutW100Filled'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M618-172q-12.75 0-21.37-8.63Q588-189.25 588-202v-326q0-24.75-17.62-42.38Q552.75-588 528-588H410q-12.75 0-21.37-8.63Q380-605.25 380-618v-140q0-12.75 8.63-21.38Q397.25-788 410-788h348q12.75 0 21.38 8.62Q788-770.75 788-758v556q0 12.75-8.62 21.37Q770.75-172 758-172H618Zm-208 0q-12.75 0-21.37-8.63Q380-189.25 380-202v-328q0-12.75 8.63-21.38Q397.25-560 410-560h120q12.75 0 21.38 8.62Q560-542.75 560-530v328q0 12.75-8.62 21.37Q542.75-172 530-172H410Zm-208 0q-12.75 0-21.37-8.63Q172-189.25 172-202v-328q0-12.75 8.63-21.38Q189.25-560 202-560h120q12.75 0 21.38 8.62Q352-542.75 352-530v328q0 12.75-8.62 21.37Q334.75-172 322-172H202Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutW100Filled.displayName = 'OnesyIconMaterialResponsiveLayoutW100Filled';

export default IconMaterialResponsiveLayoutW100Filled;
