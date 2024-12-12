import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceBetweenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetweenW100'

      short_name='AlignSpaceBetween'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-732v-68H132v-28h696v28H654v68H306ZM132-132v-28h174v-68h348v68h174v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetweenW100.displayName = 'OnesyIconMaterialAlignSpaceBetweenW100';

export default IconMaterialAlignSpaceBetweenW100;
