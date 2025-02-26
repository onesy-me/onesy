import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFinanceModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceModeFilled'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-490v-170q0-25 17.5-42.5T380-720q25 0 42.5 17.5T440-660v170q0 25-17.5 42.5T380-430q-25 0-42.5-17.5T320-490Zm200-9v-321q0-25 17.5-42.5T580-880q25 0 42.5 17.5T640-820v321q0 30-18.5 45T580-439q-23 0-41.5-15T520-499ZM120-361v-139q0-25 17.5-42.5T180-560q25 0 42.5 17.5T240-500v139q0 30-18.5 45T180-301q-23 0-41.5-15T120-361Zm96 243q-26 0-36.5-24.5T188-186l164-164q11-11 26.5-12t27.5 10l114 98 224-224h-24q-17 0-28.5-11.5T680-518q0-17 11.5-28.5T720-558h120q17 0 28.5 11.5T880-518v120q0 17-11.5 28.5T840-358q-17 0-28.5-11.5T800-398v-24L550-172q-11 11-26.5 12T496-170l-114-98-138 138q-5 5-12.5 8.5T216-118Z"/>
    </Icon>
  );
});

IconMaterialFinanceModeFilled.displayName = 'OnesyIconMaterialFinanceModeFilled';

export default IconMaterialFinanceModeFilled;
