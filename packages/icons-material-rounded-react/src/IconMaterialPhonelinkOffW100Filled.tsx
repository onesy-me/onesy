import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhonelinkOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOffW100Filled'

      short_name='PhonelinkOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M829-590v274q0 10.5-5.5 17.25T810-289q-8 3-16.5 2t-15.5-8L591-482q-8.25-8.16-13.12-19.65Q573-513.14 573-525v-65q0-12.75 8.63-21.38Q590.25-620 603-620h196q12.75 0 21.38 8.62Q829-602.75 829-590ZM603-212q-12.75 0-21.37-8.63Q573-229.25 573-242v-104L240-679v425h192q8.75 0 14.88 6.18 6.12 6.17 6.12 15 0 8.82-6.12 14.82-6.13 6-14.88 6H153q-8.75 0-14.87-6.18-6.13-6.17-6.13-15 0-8.82 6.13-14.82 6.12-6 14.87-6h59v-453l-75-75q-4-4-4.5-9.5T137-802q5-5 10-5t10 5l652 652q4 4 4.5 9.5T809-130q-5 5-10 5t-10-5l-82-82H603Zm171-508H348q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T348-748h426q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOffW100Filled.displayName = 'OnesyIconMaterialPhonelinkOffW100Filled';

export default IconMaterialPhonelinkOffW100Filled;
