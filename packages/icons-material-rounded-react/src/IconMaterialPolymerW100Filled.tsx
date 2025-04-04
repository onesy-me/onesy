import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolymerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerW100Filled'

      short_name='Polymer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-224h-65q-17 0-30.5-8.5T237-255L128-451q-8-14-8-29t8-29l115-204q6-11 16.5-17t22.5-6h64q13 0 19 11.5t0 22.5L240-480l84 148 230-375q8-14 22-21.5t30-7.5h63q17 0 30.5 8.5T721-705l110 196q8 14 8 29t-8 29L717-247q-6 11-16.5 17t-22.5 6h-64q-13 0-19-11.5t0-22.5l125-222-84-148-230 375q-8 14-22 21.5t-30 7.5Z"/>
    </Icon>
  );
});

IconMaterialPolymerW100Filled.displayName = 'OnesyIconMaterialPolymerW100Filled';

export default IconMaterialPolymerW100Filled;
