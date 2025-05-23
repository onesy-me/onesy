import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFoodBeverageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100Filled'

      short_name='EmojiFoodBeverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-28h536v28H212Zm472-442h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146ZM212-320v-468h154v84l-66 55v135h160v-135l-66-55v-84h370q26 0 45 17.5t19 43.5v80q0 26-19 43.5T764-586h-80v266H212Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100Filled.displayName = 'OnesyIconMaterialEmojiFoodBeverageW100Filled';

export default IconMaterialEmojiFoodBeverageW100Filled;
