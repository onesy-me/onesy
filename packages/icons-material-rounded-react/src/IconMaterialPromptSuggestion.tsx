import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPromptSuggestion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PromptSuggestion'

      short_name='PromptSuggestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M687-400H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760q17 0 28.5 11.5T340-720q0 17-11.5 28.5T300-680q-42 0-71 29t-29 71q0 42 29 71t71 29h387L572-596q-11-11-11.5-27.5T572-652q11-11 28-11t28 11l184 184q12 12 12 28t-12 28L628-228q-12 12-28 11.5T572-229q-11-12-11.5-28t11.5-28l115-115Z"/>
    </Icon>
  );
});

IconMaterialPromptSuggestion.displayName = 'OnesyIconMaterialPromptSuggestion';

export default IconMaterialPromptSuggestion;
