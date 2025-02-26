import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCasesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesFilled'

      short_name='Cases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80v-520h80v440h680v80H40Zm160-160v-520h200v-160h320v160h200v520H200Zm280-520h160v-80H480v80Z"/>
    </Icon>
  );
});

IconMaterialCasesFilled.displayName = 'OnesyIconMaterialCasesFilled';

export default IconMaterialCasesFilled;
