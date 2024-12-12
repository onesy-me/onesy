import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVolcanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoFilled'

      short_name='Volcano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 160-360h120l80-200h280L880-80H80Zm440-680v-160h80v160h-80Zm181 75-56-56 113-113 57 56-114 113Zm-282 0L306-798l56-57 113 114-56 56Z"/>
    </Icon>
  );
});

IconMaterialVolcanoFilled.displayName = 'OnesyIconMaterialVolcanoFilled';

export default IconMaterialVolcanoFilled;
