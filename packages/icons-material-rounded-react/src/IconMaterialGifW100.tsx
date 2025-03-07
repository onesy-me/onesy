import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifW100'

      short_name='Gif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M490.05-376q-6.05 0-10.05-3.97-4-3.96-4-10.03v-180q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v180q0 6.07-3.95 10.03-3.96 3.97-10 3.97ZM288-376q-24 0-42-18t-18-42v-88q0-24 18-42t42-18h94q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4h-94q-12 0-22 10t-10 22v88q0 12 10 22t22 10h48q12 0 22-10t10-22v-22q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.83 4 3.82 4 9.67v22.5q0 24-18 42t-42 18h-48Zm310.05 0q-6.05 0-10.05-3.97-4-3.96-4-10.03v-180q0-6.07 3.97-10.03Q591.93-584 598-584h120q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H612v64h66q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4h-66v74q0 6.07-3.95 10.03-3.96 3.97-10 3.97Z"/>
    </Icon>
  );
});

IconMaterialGifW100.displayName = 'OnesyIconMaterialGifW100';

export default IconMaterialGifW100;
