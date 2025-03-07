import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllergiesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergiesW100Filled'

      short_name='Allergies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM284-422l72-36-80-160-72 36 80 160Zm96 182h80v-290l-84-168-72 36 76 152v270Zm120 0h80v-270l76-152-72-36-84 168v290Zm176-182 80-160-72-36-80 160 72 36Z"/>
    </Icon>
  );
});

IconMaterialAllergiesW100Filled.displayName = 'OnesyIconMaterialAllergiesW100Filled';

export default IconMaterialAllergiesW100Filled;
