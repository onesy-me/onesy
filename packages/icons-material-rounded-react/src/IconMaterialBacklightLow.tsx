import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLow'

      short_name='BacklightLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-360q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440h40q17 0 28.5 11.5T200-400q0 17-11.5 28.5T160-360h-40Zm162-238q-11 11-28 11t-28-11l-29-29q-11-11-11-28t11-28q11-11 28-11t28 11l29 29q11 11 11 28t-11 28Zm58 358q-25 0-42.5-17.5T280-300q0-25 17.5-42.5T340-360h280q25 0 42.5 17.5T680-300q0 25-17.5 42.5T620-240H340Zm140-440q-17 0-28.5-11.5T440-720v-40q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v40q0 17-11.5 28.5T480-680Zm198 82q-11-12-11.5-28t11.5-28l29-29q12-12 28-11.5t28 12.5q11 12 11.5 28T763-626l-29 29q-12 12-28 11.5T678-598Zm122 238q-17 0-28.5-11.5T760-400q0-17 11.5-28.5T800-440h40q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360h-40Z"/>
    </Icon>
  );
});

IconMaterialBacklightLow.displayName = 'OnesyIconMaterialBacklightLow';

export default IconMaterialBacklightLow;
