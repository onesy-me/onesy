import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryFilled'

      short_name='Category'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Z"/>
    </Icon>
  );
});

IconMaterialCategoryFilled.displayName = 'OnesyIconMaterialCategoryFilled';

export default IconMaterialCategoryFilled;
