import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUpOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffFilled'

      short_name='ThumbUpOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-.825 0-1.412-.587Q8 19.825 8 19V8.825q0-.4.163-.763.162-.362.437-.637l5.425-5.4q.375-.35.888-.425.512-.075.987.175t.687.7q.213.45.088.925L15.55 8H21q.8 0 1.4.6.6.6.6 1.4v2q0 .175-.038.375-.037.2-.112.375l-3 7.05q-.225.5-.75.85T18 21Zm-6 0q-.825 0-1.412-.587Q2 19.825 2 19v-9q0-.825.588-1.413Q3.175 8 4 8t1.412.587Q6 9.175 6 10v9q0 .825-.588 1.413Q4.825 21 4 21Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffFilled.displayName = 'OnesyIconMaterialThumbUpOffFilled';

export default IconMaterialThumbUpOffFilled;
