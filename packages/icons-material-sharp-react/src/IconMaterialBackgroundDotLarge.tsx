import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundDotLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotLarge'

      short_name='BackgroundDotLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-280q25 0 42.5-17.5T400-340q0-25-17.5-42.5T340-400q-25 0-42.5 17.5T280-340q0 25 17.5 42.5T340-280Zm0-280q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Zm280 280q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm0-280q25 0 42.5-17.5T680-620q0-25-17.5-42.5T620-680q-25 0-42.5 17.5T560-620q0 25 17.5 42.5T620-560ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotLarge.displayName = 'OnesyIconMaterialBackgroundDotLarge';

export default IconMaterialBackgroundDotLarge;
