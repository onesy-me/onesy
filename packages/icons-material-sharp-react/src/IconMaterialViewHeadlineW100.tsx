import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewHeadlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineW100'

      short_name='ViewHeadline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-392v-28h588v28H186Zm0 148v-28h588v28H186Zm0-296v-28h588v28H186Zm0-148v-28h588v28H186Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineW100.displayName = 'OnesyIconMaterialViewHeadlineW100';

export default IconMaterialViewHeadlineW100;
