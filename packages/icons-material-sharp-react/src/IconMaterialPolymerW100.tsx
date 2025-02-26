import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolymerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerW100'

      short_name='Polymer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M254-224 112-480l144-256h128L240-480l84 148 248-404h132l144 256-144 256H576l144-256-84-148-248 404H254Z"/>
    </Icon>
  );
});

IconMaterialPolymerW100.displayName = 'OnesyIconMaterialPolymerW100';

export default IconMaterialPolymerW100;
