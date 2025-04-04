import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSanitizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sanitizer'

      short_name='Sanitizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-640q-25 0-42.5-17.5T620-700q0-19 16.5-44t28.5-39q6-7 15-7t15 7q12 14 28.5 39t16.5 44q0 25-17.5 42.5T680-640Zm100 280q-42 0-71-29t-29-71q0-35 27.5-80.5T757-612q9-11 23-11t23 11q22 26 49.5 71.5T880-460q0 42-29 71t-71 29Zm-420 40v40q0 17 11.5 28.5T400-240q17 0 28.5-11.5T440-280v-40h40q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400h-40v-40q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440v40h-40q-17 0-28.5 11.5T280-360q0 17 11.5 28.5T320-320h40ZM240-160h320v-320q0-66-47-113t-113-47q-66 0-113 47t-47 113v320Zm0 0h320-320Zm0 80q-33 0-56.5-23.5T160-160v-320q0-90 57-156t143-80v-84h-40q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h200q26 0 50.5 6.5T617-855q11 5 17 15t6 22q0 17-12 28.5T599-778q-8 0-22-7-13-7-27-11t-30-4h-80v84q86 14 143 80t57 156v320q0 33-23.5 56.5T560-80H240Z"/>
    </Icon>
  );
});

IconMaterialSanitizer.displayName = 'OnesyIconMaterialSanitizer';

export default IconMaterialSanitizer;
