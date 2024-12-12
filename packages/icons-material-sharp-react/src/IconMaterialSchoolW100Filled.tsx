import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100Filled'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-364v-220L480-420 148-600l332-180 332 180v236h-28ZM480-240 252-364v-152l228 124 228-124v152L480-240Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100Filled.displayName = 'OnesyIconMaterialSchoolW100Filled';

export default IconMaterialSchoolW100Filled;
