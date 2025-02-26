import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10SelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectW100Filled'

      short_name='Timer10Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-274h212v-412H344v412Zm-28 28v-468h268v468H316Zm-160 0v-440H76v-28h108v468h-28Zm540 0v-28h160v-92H696v-148h188v28H724v92h160v148H696Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectW100Filled.displayName = 'OnesyIconMaterialTimer10SelectW100Filled';

export default IconMaterialTimer10SelectW100Filled;
