import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLinkW100'

      short_name='MediaLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M313-216v-178l143 89-143 89Zm207-364q-43.33 0-73.67-30.26Q416-640.53 416-683.76q0-43.24 30.33-73.74Q476.67-788 520-788h34v28h-34q-31.67 0-53.83 22.24-22.17 22.23-22.17 54Q444-652 466.17-630q22.16 22 53.83 22h34v28h-34Zm126 0v-28h34q31.67 0 53.83-22.24 22.17-22.23 22.17-54Q756-716 733.83-738q-22.16-22-53.83-22h-34v-28h34q43.33 0 73.67 30.26Q784-727.47 784-684.24q0 43.24-30.33 73.74Q723.33-580 680-580h-34Zm-110-90v-28h128v28H536Zm79 223v-28h225v-360H360v330h-28v-358h536v416H615ZM92-97v-416h536v416H92Zm28-28h480v-360H120v360Zm480-530ZM360-305Z"/>
    </Icon>
  );
});

IconMaterialMediaLinkW100.displayName = 'OnesyIconMaterialMediaLinkW100';

export default IconMaterialMediaLinkW100;
