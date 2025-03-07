import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataThresholding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholding'

      short_name='DataThresholding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm491-80h69v-69l-69 69Zm-457 0h73l120-120h85L392-200h64l120-120h85L541-200h65l120-120h34v-440H200v509l69-69h85L234-200Zm193-320-93 92q-11 11-27.5 11.5T278-428q-11-11-11-28t11-28l121-121q12-12 28-12t28 12l52 52 119-119q11-11 27.5-11.5T682-672q11 11 11 28t-11 28L535-468q-12 12-28 12t-28-12l-52-52ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDataThresholding.displayName = 'OnesyIconMaterialDataThresholding';

export default IconMaterialDataThresholding;
