import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftFilled'

      short_name='AlignHorizontalLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm180-200q-25 0-42.5-17.5T240-340q0-25 17.5-42.5T300-400h280q25 0 42.5 17.5T640-340q0 25-17.5 42.5T580-280H300Zm0-280q-25 0-42.5-17.5T240-620q0-25 17.5-42.5T300-680h520q25 0 42.5 17.5T880-620q0 25-17.5 42.5T820-560H300Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftFilled.displayName = 'OnesyIconMaterialAlignHorizontalLeftFilled';

export default IconMaterialAlignHorizontalLeftFilled;
