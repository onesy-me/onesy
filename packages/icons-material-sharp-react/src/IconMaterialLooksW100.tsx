import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksW100'

      short_name='Looks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-280q0-80 30.5-151t83-123.5Q258-607 329-637.5T480-668q80 0 151 30.5t123.5 83Q807-502 837.5-431T868-280h-28q0-149-105.5-254.5T480-640q-149 0-254.5 105.5T120-280H92Zm160 0q0-95 66.5-161.5T480-508q95 0 161.5 66.5T708-280h-28q0-83-58.5-141.5T480-480q-83 0-141.5 58.5T280-280h-28Z"/>
    </Icon>
  );
});

IconMaterialLooksW100.displayName = 'OnesyIconMaterialLooksW100';

export default IconMaterialLooksW100;
