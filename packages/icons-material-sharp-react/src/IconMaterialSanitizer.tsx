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
      <path d="M680-640q-25 0-42.5-17.5T620-700q0-17 17-45t43-55q26 27 43 55t17 45q0 25-17.5 42.5T680-640Zm100 280q-42 0-71-29t-29-71q0-35 31-86.5t69-93.5q38 42 69 93.5t31 86.5q0 42-29 71t-71 29ZM360-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-80v-400q0-90 57-156t143-80v-84h-80v-80h240q34 0 64 10.5t56 29.5l-58 58q-14-8-29.5-13t-32.5-5h-80v84q86 14 143 80t57 156v400H160Zm80-80h320v-320q0-66-47-113t-113-47q-66 0-113 47t-47 113v320Zm0 0h320-320Z"/>
    </Icon>
  );
});

IconMaterialSanitizer.displayName = 'OnesyIconMaterialSanitizer';

export default IconMaterialSanitizer;
