import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndW100'

      short_name='PinEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v254h-28v-226H160v480h386v28H132Zm463-173L414-566v126h-28v-174h174v28H433l182 181-20 20Zm143 173q-37.5 0-63.75-26.25T648-302q0-37.5 26.25-63.75T738-392q37.5 0 63.75 26.25T828-302q0 37.5-26.25 63.75T738-212Z"/>
    </Icon>
  );
});

IconMaterialPinEndW100.displayName = 'OnesyIconMaterialPinEndW100';

export default IconMaterialPinEndW100;
