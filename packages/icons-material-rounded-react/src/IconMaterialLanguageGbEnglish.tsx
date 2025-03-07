import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageGbEnglish = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageGbEnglish'

      short_name='LanguageGbEnglish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-360h160v-80H600v80Zm0-160h160v-80H600v80ZM200-280q-33 0-56.5-23.5T120-360v-240q0-33 23.5-56.5T200-680h200q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600H200v240h160v-80h-40q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520h80q17 0 28.5 11.5T440-480v120q0 33-23.5 56.5T360-280H200Zm360 0q-17 0-28.5-11.5T520-320v-320q0-17 11.5-28.5T560-680h200q33 0 56.5 23.5T840-600v60q0 25-17.5 42.5T780-480q25 0 42.5 17.5T840-420v60q0 33-23.5 56.5T760-280H560Z"/>
    </Icon>
  );
});

IconMaterialLanguageGbEnglish.displayName = 'OnesyIconMaterialLanguageGbEnglish';

export default IconMaterialLanguageGbEnglish;
