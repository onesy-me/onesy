import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceBetweenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceBetweenFilled'

      short_name='AlignJustifySpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-80q-17 0-28.5-11.5T800-120v-160h-80q-17 0-28.5-11.5T680-320v-320q0-17 11.5-28.5T720-680h80v-160q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Zm-720 0q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v160h80q17 0 28.5 11.5T280-640v320q0 17-11.5 28.5T240-280h-80v160q0 17-11.5 28.5T120-80Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceBetweenFilled.displayName = 'OnesyIconMaterialAlignJustifySpaceBetweenFilled';

export default IconMaterialAlignJustifySpaceBetweenFilled;
