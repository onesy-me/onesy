import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScanner'

      short_name='AdfScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-320h160v-320h480v320h160v320H80Zm240-320h320v-240H320v240ZM160-240h640v-160H160v160Zm560-40q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280ZM160-400h640-640Z"/>
    </Icon>
  );
});

IconMaterialAdfScanner.displayName = 'OnesyIconMaterialAdfScanner';

export default IconMaterialAdfScanner;
