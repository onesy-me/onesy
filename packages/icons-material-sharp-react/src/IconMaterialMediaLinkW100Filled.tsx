import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLinkW100Filled'

      short_name='MediaLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m313-216 143-89-143-89v178Zm223-454h128v-28H536v28ZM92-97v-416h536v416H92Zm616-350v-137q33-9 54.5-36.5T784-684q0-43.33-30.33-73.67Q723.33-788 680-788h-34v28h34q31.67 0 53.83 22.24 22.17 22.23 22.17 54Q756-652 733.83-630q-22.16 22-53.83 22h-34v15h-92v-15h-34q-31.67 0-53.83-22.24-22.17-22.23-22.17-54Q444-716 466.17-738q22.16-22 53.83-22h34v-28h-34q-43.33 0-73.67 30.33Q416-727.33 416-684q0 29 15 53t39 38H332v-270h536v416H708Z"/>
    </Icon>
  );
});

IconMaterialMediaLinkW100Filled.displayName = 'OnesyIconMaterialMediaLinkW100Filled';

export default IconMaterialMediaLinkW100Filled;
