import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextFieldsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsW100Filled'

      short_name='TextFields'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-206v-520H126v-28h428v28H354v520h-28Zm360 0v-320H566v-28h268v28H714v320h-28Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsW100Filled.displayName = 'OnesyIconMaterialTextFieldsW100Filled';

export default IconMaterialTextFieldsW100Filled;
