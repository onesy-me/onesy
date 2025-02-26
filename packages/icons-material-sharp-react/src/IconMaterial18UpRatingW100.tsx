import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial18UpRatingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingW100'

      short_name='18UpRating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-376h28v-208h-88v28h60v180Zm120 0h148v-208H476v208Zm28-28v-62h92v62h-92Zm0-90v-62h92v62h-92ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingW100.displayName = 'OnesyIconMaterial18UpRatingW100';

export default IconMaterial18UpRatingW100;
