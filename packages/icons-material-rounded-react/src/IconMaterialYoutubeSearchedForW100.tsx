import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYoutubeSearchedForW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForW100'

      short_name='YoutubeSearchedFor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360q-29 0-54.5-6.5T337-385q-5-3-7-8.5t1-10.5q3-5 9-6.5t11 1.5q20 11 42 16t47 5q81 0 136.5-55.5T632-580q0-81-55.5-136.5T440-772q-81 0-136.5 55.5T248-580l54-56q4-5 9.5-5t10.5 5q5 5 5 10t-5 10l-67 67q-9 9-21 9t-21-9l-67-67q-4-4-4-10t4-10q5-5 10.5-5t9.5 5l54 56q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l218 218q4 4 4.5 9.5T824-196q-5 5-10 5t-10-5L586-414q-30 26-69 40t-77 14Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForW100.displayName = 'OnesyIconMaterialYoutubeSearchedForW100';

export default IconMaterialYoutubeSearchedForW100;
