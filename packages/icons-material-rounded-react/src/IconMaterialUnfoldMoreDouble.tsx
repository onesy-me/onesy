import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDouble'

      short_name='UnfoldMoreDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m481-114 99-99q12-12 28-11.5t28 12.5q11 12 11.5 28T636-156L509-29q-6 6-13 8.5T481-18q-8 0-15-2.5T453-29L326-156q-11-11-11.5-27.5T326-212q11-11 28-11t28 11l99 98Zm0-200 99-99q12-12 28-11.5t28 12.5q11 12 11.5 28T636-356L509-229q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L326-356q-11-11-11.5-27.5T326-412q11-11 28-11t28 11l99 98Zm0-333-99 99q-12 12-28.5 11.5T325-549q-12-12-12-28.5t12-28.5l128-127q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l127 128q12 12 12 28t-12 28q-12 12-28.5 12T579-549l-98-98Zm0-200-99 99q-12 12-28.5 11.5T325-749q-12-12-12-28.5t12-28.5l128-127q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l127 128q12 12 12 28t-12 28q-12 12-28.5 12T579-749l-98-98Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDouble.displayName = 'OnesyIconMaterialUnfoldMoreDouble';

export default IconMaterialUnfoldMoreDouble;
