import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoolToDry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoolToDry'

      short_name='CoolToDry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-142q-118-15-199-104t-81-210q0-66 24.5-122.5T254-678l226-222 226 222q36 36 59.5 81t31.5 97h-81q-7-34-23.5-64.5T650-620L480-788 310-620q-35 33-52.5 74.5T240-456q0 87 57.5 153T440-223v81Zm38-364Zm54 173-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-401q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23t-57.5 9q-23 0-45.5-5.5T695-340q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19Zm0 120-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-281q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23t-57.5 9q-23 0-45.5-5.5T695-220q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19Zm0 120-24-55q26-14 54.5-23t57.5-9q23 0 45.5 5.5T709-161q18 8 36.5 14t38.5 6q23 0 45-8t43-19l24 55q-26 14-54.5 23T784-81q-23 0-45.5-5.5T695-100q-18-8-36.5-14t-38.5-6q-23 0-45 8t-43 19Z"/>
    </Icon>
  );
});

IconMaterialCoolToDry.displayName = 'OnesyIconMaterialCoolToDry';

export default IconMaterialCoolToDry;
