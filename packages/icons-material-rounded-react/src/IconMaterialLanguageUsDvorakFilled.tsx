import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageUsDvorakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsDvorakFilled'

      short_name='LanguageUsDvorak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-360h130v-240H240v240Zm-40 80q-17 0-28.5-11.5T160-320v-320q0-17 11.5-28.5T200-680h170q33 0 56.5 23.5T450-600v240q0 33-23.5 56.5T370-280H200Zm452 0q-12 0-22-7.5T616-306L507-630q-6-18 5-34t31-16q12 0 22 7.5t14 18.5l86 252 86-252q4-11 14-18.5t22-7.5q20 0 31 15.5t5 34.5L714-306q-4 11-14 18.5t-22 7.5h-26Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsDvorakFilled.displayName = 'OnesyIconMaterialLanguageUsDvorakFilled';

export default IconMaterialLanguageUsDvorakFilled;
