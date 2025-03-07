import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearMeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100Filled'

      short_name='NearMeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m508-257-72-181-182-74q-10-4-14.5-12t-4.5-16q0-8 4.5-16t14.5-12l154-58-215-215q-4-4-4.5-9.5T193-861q5-5 10-5t10 5l648 648q4 4 4.5 9.5T861-193q-5 5-10 5t-10-5L623-411l-59 154q-4 10-12 14.5t-16 4.5q-8 0-16-4.5T508-257Zm219-472q6 6 8.5 14.5T734-697l-51 133q-6 15-22.5 18.5T633-553l-82-82q-11-11-8-27.5t18-22.5l134-51q9-4 17.5-1.5T727-729Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100Filled.displayName = 'OnesyIconMaterialNearMeDisabledW100Filled';

export default IconMaterialNearMeDisabledW100Filled;
