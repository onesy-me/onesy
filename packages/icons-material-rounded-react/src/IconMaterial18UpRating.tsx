import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial18UpRating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRating'

      short_name='18UpRating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-540v150q0 13 8.5 21.5T370-360q13 0 21.5-8.5T400-390v-180q0-13-8.5-21.5T370-600h-60q-13 0-21.5 8.5T280-570q0 13 8.5 21.5T310-540h30Zm160 180h100q17 0 28.5-11.5T640-400v-160q0-17-11.5-28.5T600-600H500q-17 0-28.5 11.5T460-560v160q0 17 11.5 28.5T500-360Zm20-40v-60h60v60h-60Zm0-100v-60h60v60h-60ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial18UpRating.displayName = 'OnesyIconMaterial18UpRating';

export default IconMaterial18UpRating;
