import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaucet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Faucet'

      short_name='Faucet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-440h160v-40h-80q-17 0-28.5-11.5T160-520q0-17 11.5-28.5T200-560h80q33 0 56.5 23.5T360-480v40h80v-276q0-69 48-116.5T605-880q46 0 85 24t60 66l28 56q8 15 2.5 30.5T760-680q-15 8-30.5 2.5T706-698l-28-56q-11-21-31-33.5T604-800q-35 0-59.5 24.5T520-716v276h80v-40q0-33 23.5-56.5T680-560h80q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480h-80v40h160q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H120q-17 0-28.5-11.5T80-400q0-17 11.5-28.5T120-440Zm120 320q-33 0-56.5-23.5T160-200v-160h80v160h480v-160h80v160q0 33-23.5 56.5T720-120H240Z"/>
    </Icon>
  );
});

IconMaterialFaucet.displayName = 'OnesyIconMaterialFaucet';

export default IconMaterialFaucet;
