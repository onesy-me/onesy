import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeployedCodeAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeployedCodeAccount'

      short_name='DeployedCodeAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-32q0-33 17-62t47-44q60-30 124.5-46T401-440q16 0 27.5 11.5T440-398q0 16-11.5 27T401-360q-71 0-128 18t-93 36q-9 5-14.5 14t-5.5 20v32h240q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160H160q-33 0-56.5-23.5T80-240Zm600 121q-8 0-16-2t-15-7l-120-70q-14-8-21.5-21.5T500-249v-141q0-16 7.5-29.5T529-441l120-70q7-5 15-7t16-2q8 0 15.5 2.5T710-511l120 70q14 8 22 21.5t8 29.5v141q0 16-8 29.5T830-198l-120 70q-7 4-14.5 6.5T680-119ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm0 400Zm186-166 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z"/>
    </Icon>
  );
});

IconMaterialDeployedCodeAccount.displayName = 'OnesyIconMaterialDeployedCodeAccount';

export default IconMaterialDeployedCodeAccount;
