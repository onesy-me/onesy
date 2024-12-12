import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerW100Filled'

      short_name='AdfScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-192v-256h130v-308h376v308h130v256H162Zm158-256h320v-280H320v280Zm380 128q17 0 28.5-11.5T740-360q0-17-11.5-28.5T700-400q-17 0-28.5 11.5T660-360q0 17 11.5 28.5T700-320Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerW100Filled.displayName = 'OnesyIconMaterialAdfScannerW100Filled';

export default IconMaterialAdfScannerW100Filled;
