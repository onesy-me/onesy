import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeFilled'

      short_name='DeployedCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-68 120-275v-410l360-207 360 207v410L480-68Zm-40-389v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeFilled.displayName = 'OnesyIconMaterialDeployedCodeFilled';

export default IconMaterialDeployedCodeFilled;
