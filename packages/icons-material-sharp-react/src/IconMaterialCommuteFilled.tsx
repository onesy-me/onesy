import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteFilled'

      short_name='Commute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-220v60h-80v-254l65-186h350l65 186v254h-80v-60H480Zm0-240h320l-28-80H508l-28 80Zm40 160q17 0 28.5-11.5T560-340q0-17-11.5-28.5T520-380q-17 0-28.5 11.5T480-340q0 17 11.5 28.5T520-300Zm240 0q17 0 28.5-11.5T800-340q0-17-11.5-28.5T760-380q-17 0-28.5 11.5T720-340q0 17 11.5 28.5T760-300ZM160-160v-40l40-40q-50 0-85-35t-35-85v-320q0-66 59-93t201-27q148 0 204 26t56 94v40h-80v-40H160v240h200v280H160Zm40-160q17 0 28.5-11.5T240-360q0-17-11.5-28.5T200-400q-17 0-28.5 11.5T160-360q0 17 11.5 28.5T200-320Z"/>
    </Icon>
  );
});

IconMaterialCommuteFilled.displayName = 'OnesyIconMaterialCommuteFilled';

export default IconMaterialCommuteFilled;
