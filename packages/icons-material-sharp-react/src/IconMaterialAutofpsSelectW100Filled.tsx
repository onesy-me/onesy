import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutofpsSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelectW100Filled'

      short_name='AutofpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-586 40-108h2l42 108h-84Zm42.24 174Q402-412 347-466.76q-55-54.77-55-133Q292-678 346.76-733q54.77-55 133-55Q558-788 613-733.24q55 54.77 55 133Q668-522 613.24-467q-54.77 55-133 55ZM374-494h28l26-66h104l26 66h32L488-746h-18l-96 252ZM164-106v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h248v148H548Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelectW100Filled.displayName = 'OnesyIconMaterialAutofpsSelectW100Filled';

export default IconMaterialAutofpsSelectW100Filled;
