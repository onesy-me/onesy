import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRegularExpressionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpressionW100'

      short_name='RegularExpression'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-229q-51-51-80-115.5T131-481q0-72 28-137.5T240-734l21 20q-49 45-75.5 105.5T159-482q0 66 27 126.5T261-249l-21 20Zm140-37q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Zm165-200v-91l-78 46-14-24 78-45-78-45 14-24 78 46v-91h28v91l78-46 14 24-78 45 78 45-14 24-78-46v91h-28Zm174 237-21-20q49-45 75.5-106T800-482q0-66-27-126t-75-106l21-20q51 51 80 116t29 137q0 72-28.5 137.5T719-229Z"/>
    </Icon>
  );
});

IconMaterialRegularExpressionW100.displayName = 'OnesyIconMaterialRegularExpressionW100';

export default IconMaterialRegularExpressionW100;
