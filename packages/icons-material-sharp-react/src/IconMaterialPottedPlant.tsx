import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPottedPlant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlant'

      short_name='PottedPlant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-160h276l40-160H302l40 160Zm-62 80-60-240h520L680-80H280Zm-80-320h560v-80H200v80Zm280-240q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v240H120v-240h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z"/>
    </Icon>
  );
});

IconMaterialPottedPlant.displayName = 'OnesyIconMaterialPottedPlant';

export default IconMaterialPottedPlant;
