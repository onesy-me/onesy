import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEvShadowMinusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvShadowMinusFilled'

      short_name='EvShadowMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-200q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h240q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H600ZM439-82q-70 0-131-32.5T197-197q-57-57-87-130T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q156 0 268 101.5T877-525q2 18-9.5 31.5T838-480q-15 0-26.5-9.5T798-514q-5-29-9.5-50.5T770-615L432-278q13 16 27.5 29.5T491-222q20 16 27 40t-2 48q-9 25-30 38.5T439-82Zm-50-265 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm-26-178 247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Z"/>
    </Icon>
  );
});

IconMaterialEvShadowMinusFilled.displayName = 'OnesyIconMaterialEvShadowMinusFilled';

export default IconMaterialEvShadowMinusFilled;
