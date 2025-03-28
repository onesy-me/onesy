import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifyStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretchFilled'

      short_name='AlignJustifyStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm440-480q-17 0-28.5-11.5T520-600v-40q0-17 11.5-28.5T560-680h120q17 0 28.5 11.5T720-640v40q0 17-11.5 28.5T680-560H560Zm-280 0q-17 0-28.5-11.5T240-600v-40q0-17 11.5-28.5T280-680h120q17 0 28.5 11.5T440-640v40q0 17-11.5 28.5T400-560H280Zm280 280q-17 0-28.5-11.5T520-320v-40q0-17 11.5-28.5T560-400h120q17 0 28.5 11.5T720-360v40q0 17-11.5 28.5T680-280H560Zm-280 0q-17 0-28.5-11.5T240-320v-40q0-17 11.5-28.5T280-400h120q17 0 28.5 11.5T440-360v40q0 17-11.5 28.5T400-280H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretchFilled.displayName = 'OnesyIconMaterialAlignJustifyStretchFilled';

export default IconMaterialAlignJustifyStretchFilled;
