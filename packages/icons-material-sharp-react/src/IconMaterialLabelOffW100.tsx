import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffW100'

      short_name='LabelOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m677-324-20-20 97-136-143-200H320l-28-28h333l163 228-111 156Zm55 208L596-252H172v-424l-76-76 20-20 636 636-20 20ZM384-464Zm105-48Zm79 232L200-648v368h368Z"/>
    </Icon>
  );
});

IconMaterialLabelOffW100.displayName = 'OnesyIconMaterialLabelOffW100';

export default IconMaterialLabelOffW100;
