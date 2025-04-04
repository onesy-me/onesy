import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStorefront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storefront'

      short_name='Storefront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M841-518v398H121v-398q-23-21-35.5-54t-.5-72l61-196h670l61 196q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"/>
    </Icon>
  );
});

IconMaterialStorefront.displayName = 'OnesyIconMaterialStorefront';

export default IconMaterialStorefront;
