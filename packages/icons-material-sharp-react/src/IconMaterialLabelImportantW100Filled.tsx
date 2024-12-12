import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelImportantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100Filled'

      short_name='LabelImportant'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m172-252 146-228-146-228h455l161 228-164 228H172Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100Filled.displayName = 'OnesyIconMaterialLabelImportantW100Filled';

export default IconMaterialLabelImportantW100Filled;
