import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitlecase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Titlecase'

      short_name='Titlecase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-283v-333h-87q-14 0-23.5-9t-9.5-23q0-14 9.5-23t23.5-9h243q14 0 23 9t9 23q0 14-9 23t-23 9h-88v333q0 14-10 23.5t-24 9.5q-14 0-24-9.5T344-283Zm250-215h-25q-12 0-20.5-8.5T540-527q0-12 8.5-20.5T569-556h25v-54q0-14 9.5-23.5T627-643q14 0 23.5 9.5T660-610v54h45q12 0 20.5 8.5T734-527q0 12-8.5 20.5T705-498h-45v148q0 23 10.5 36t28.5 13h9q11-1 19.5 7.5T736-273q0 14-7.5 22T708-241q-5 1-10 1h-10q-44 0-69-25.5T594-336v-162Z"/>
    </Icon>
  );
});

IconMaterialTitlecase.displayName = 'OnesyIconMaterialTitlecase';

export default IconMaterialTitlecase;
