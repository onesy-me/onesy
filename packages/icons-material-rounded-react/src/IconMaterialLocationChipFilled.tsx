import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationChipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationChipFilled'

      short_name='LocationChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm30-310q0 61 41 106.5t89 83.5q48-38 89-83.5T610-510q0-54-38-92t-92-38q-54 0-92 38t-38 92Zm130 30q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialLocationChipFilled.displayName = 'OnesyIconMaterialLocationChipFilled';

export default IconMaterialLocationChipFilled;
