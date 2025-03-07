import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100Filled'

      short_name='Savings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-172q-20 0-36.77-13.09Q212.46-198.18 207-217q-25-90-39.5-147.5t-22.5-96q-8-38.5-10.5-65T132-580q0-70.25 48.87-119.13Q229.75-748 300-748h226q27-36 62-58t72-22q3.33 0 5.67 2.39 2.33 2.38 2.33 5.79 0 .82-.5 1.32-.5.5-.5 2.5-5 13-10 31t-11 52l125 125h27q12.75 0 21.38 8.62Q828-590.75 828-578v137q0 10.24-5.5 18.12Q817-415 807-412l-82 27-51 170q-6.03 19.61-21.84 31.31Q636.34-172 616-172h-24q-24.75 0-42.37-17.63Q532-207.25 532-232v-20H348v20q0 24.75-17.62 42.37Q312.75-172 288-172h-22Zm374-360q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532Zm-134-94q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H334q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h172Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100Filled.displayName = 'OnesyIconMaterialSavingsW100Filled';

export default IconMaterialSavingsW100Filled;
