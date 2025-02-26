import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxW100'

      short_name='SelectCheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h609l-28 28H200v560h560v-303l28-28v359H172Zm289-145L292-486l20-20 150 150 347-347 19 19-367 367Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxW100.displayName = 'OnesyIconMaterialSelectCheckBoxW100';

export default IconMaterialSelectCheckBoxW100;
