import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPromptSuggestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PromptSuggestionW100Filled'

      short_name='PromptSuggestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-424H317q-60.42 0-102.71-41Q172-506 172-566t42.29-101q42.29-41 102.71-41 5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4-48 0-82.5 33.08-34.5 33.09-34.5 81Q200-518 234.5-485t82.5 33h417L587-596q-4.58-4-4.79-10-.21-6 4.49-10.17 4.3-3.83 9.97-3.83 5.66 0 9.33 4l160 156q9 9.27 9 21.64 0 12.36-9 21.36L606-261q-4 4-9.45 3.85-5.46-.16-9.55-3.85-5-4-5-10t5-10l147-143Z"/>
    </Icon>
  );
});

IconMaterialPromptSuggestionW100Filled.displayName = 'OnesyIconMaterialPromptSuggestionW100Filled';

export default IconMaterialPromptSuggestionW100Filled;
