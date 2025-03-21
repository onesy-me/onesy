import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConditionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConditionsW100'

      short_name='Conditions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-730q-26.4 0-45.2-18.8Q336-767.6 336-794q0-26.4 18.8-45.2Q373.6-858 400-858q26.4 0 45.2 18.8Q464-820.4 464-794q0 26.4-18.8 45.2Q426.4-730 400-730Zm260 506q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm204 107L752-229q-20 16-43.35 24.5T660-196q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 25.3-8.5 48.65Q787-268 771-248l112 112-19 19Zm-414 11v-110q6 11 13 20.5t15 18.5v71h-28Zm-128 0v-524q-58-5-115.5-12.5T92-664l6-28q75 18 149.89 26 74.89 8 152 8T552-666q75-8 150-26l6 28q-57 14-114.5 21.5T478-630v127q-26 29-42 66t-19 79h-67v252h-28Z"/>
    </Icon>
  );
});

IconMaterialConditionsW100.displayName = 'OnesyIconMaterialConditionsW100';

export default IconMaterialConditionsW100;
