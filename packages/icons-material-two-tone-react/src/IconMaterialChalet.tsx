import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChalet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chalet'

      short_name='Chalet'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="13,18 11,18 11,15 9,15 9,18 7,18 7,13.33 10,10.33 13,13.33"/><path d="M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15z M13,18h-2v-3H9v3H7v-4.67l3-3l3,3V18z M22,7.5 h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71-0.71l1.45-1.45V7.5 h-0.89l-1.45,1.45l-0.71-0.71l0.75-0.75H14v-1h1.19l-0.75-0.75l0.71-0.71l1.45,1.45h0.89V5.61l-1.45-1.45l0.71-0.71l0.75,0.75V3h1 v1.19l0.75-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45-1.45l0.71,0.71L20.81,6.5H22V7.5z"/>
    </Icon>
  );
});

IconMaterialChalet.displayName = 'OnesyIconMaterialChalet';

export default IconMaterialChalet;
