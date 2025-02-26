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
      <path d="M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeFilled.displayName = 'OnesyIconMaterialDeployedCodeFilled';

export default IconMaterialDeployedCodeFilled;
