import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImageSearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchFilled'

      short_name='ImageSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q17 0 28.5 11.5T400-800q0 17-11.5 28.5T360-760H200v560h560v-134q0-17 11.5-28.5T800-374q17 0 28.5 11.5T840-334v134q0 33-23.5 56.5T760-120H200Zm250-200 104-139q6-8 16-8t16 8l110 147q8 10 2 21t-18 11H280q-12 0-18-11t2-21l80-107q6-8 16-8t16 8l74 99Zm192-200q-74 0-126-52.5T464-700q0-75 52.5-127.5T644-880q75 0 127.5 52.5T824-700q0 27-8 52t-20 46l94 94q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96q-21 14-45 21t-51 7Zm2-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z"/>
    </Icon>
  );
});

IconMaterialImageSearchFilled.displayName = 'OnesyIconMaterialImageSearchFilled';

export default IconMaterialImageSearchFilled;
