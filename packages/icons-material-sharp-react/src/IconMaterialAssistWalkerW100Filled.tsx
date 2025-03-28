import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistWalkerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerW100Filled'

      short_name='AssistWalker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m528-136 35-347q-43-11-70.5-31.5T441-560l-21-21-132 131 96 126v188h-28v-176L254-414l14 117-121 153-21-17 109-140-60-189 150-148q8-8 18-12t20-4q17 0 26.5 6.5T402-638l59 58q31 31 68 53.5t91 22.5h105l31 301q14 4 23.5 15.5T789-160q0 18-12.5 31T745-116q-18 0-31.5-13T700-160q0-14 7.5-25t18.5-16l-9-85H571l-15 150h-28Zm-18-540q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Zm64 362h141l-17-162H590l-16 162Z"/>
    </Icon>
  );
});

IconMaterialAssistWalkerW100Filled.displayName = 'OnesyIconMaterialAssistWalkerW100Filled';

export default IconMaterialAssistWalkerW100Filled;
