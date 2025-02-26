import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial18UpRatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingFilled'

      short_name='18UpRating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-360h60v-240H280v60h60v180Zm120 0h180v-240H460v240Zm60-40v-60h60v60h-60Zm0-100v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterial18UpRatingFilled.displayName = 'OnesyIconMaterial18UpRatingFilled';

export default IconMaterial18UpRatingFilled;
