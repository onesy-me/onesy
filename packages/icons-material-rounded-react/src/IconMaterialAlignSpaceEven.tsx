import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceEven = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEven'

      short_name='AlignSpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-17 0-28.5-11.5T280-320v-40q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360v40q0 17-11.5 28.5T640-280H320Zm0-280q-17 0-28.5-11.5T280-600v-40q0-17 11.5-28.5T320-680h320q17 0 28.5 11.5T680-640v40q0 17-11.5 28.5T640-560H320ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm0-720q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEven.displayName = 'OnesyIconMaterialAlignSpaceEven';

export default IconMaterialAlignSpaceEven;
