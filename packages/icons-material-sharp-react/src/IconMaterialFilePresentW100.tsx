import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilePresentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentW100'

      short_name='FilePresent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-241q51 0 85.5-38t34.5-91v-190h-28v190q0 41-26.5 71T480-269q-39 0-65.5-30T388-370v-218q0-18 11-31.5t28-13.5q17 0 28 13.5t11 31.5v218h28v-218q0-29-19-51t-48-22q-29 0-48 22t-19 51v218q0 53 34.5 91t85.5 38ZM212-132v-696h374l162 162v534H212Zm28-28h480v-492H572v-148H240v640Zm0-640v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialFilePresentW100.displayName = 'OnesyIconMaterialFilePresentW100';

export default IconMaterialFilePresentW100;
