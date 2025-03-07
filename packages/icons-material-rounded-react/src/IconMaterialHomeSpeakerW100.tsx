import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeakerW100'

      short_name='HomeSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-172q-57 0-92-45t-27-103l46-368q1.33-8.25 5.67-14.63 4.33-6.37 12.4-9.72L593-818q14-6 26.5 1.5T634-794l52 478q6 57-28 100.5T567-172H393Zm0-28h174q43 0 69.5-33.3T658-311l-13.08-120H316l-15 118q-5 44.7 21 78.85Q348-200 393-200Zm-46-485-28 226h323l-36-335-259 109Zm132 254Zm2-28Zm0 28v-28 28Z"/>
    </Icon>
  );
});

IconMaterialHomeSpeakerW100.displayName = 'OnesyIconMaterialHomeSpeakerW100';

export default IconMaterialHomeSpeakerW100;
