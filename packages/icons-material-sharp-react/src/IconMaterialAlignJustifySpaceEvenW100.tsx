import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignJustifySpaceEvenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifySpaceEvenW100'

      short_name='AlignJustifySpaceEven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-132v-696h28v696h-28Zm-668 0v-696h28v696h-28Zm454-174v-348h68v348h-68Zm-280 0v-348h68v348h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifySpaceEvenW100.displayName = 'OnesyIconMaterialAlignJustifySpaceEvenW100';

export default IconMaterialAlignJustifySpaceEvenW100;
