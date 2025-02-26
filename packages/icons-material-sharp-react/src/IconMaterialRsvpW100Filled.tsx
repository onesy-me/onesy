import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRsvpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpW100Filled'

      short_name='Rsvp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M56-376v-208h168v128h-43l35 80h-31l-34-80H84v80H56Zm240 0v-28h120v-62H296v-118h148v28H324v62h120v118H296Zm284 0-61-208h29l52 178 52-178h29l-61 208h-40Zm156 0v-208h168v128H764v80h-28ZM84-484h112v-72H84v72Zm680 0h112v-72H764v72Z"/>
    </Icon>
  );
});

IconMaterialRsvpW100Filled.displayName = 'OnesyIconMaterialRsvpW100Filled';

export default IconMaterialRsvpW100Filled;
