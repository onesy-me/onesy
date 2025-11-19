import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='TvW100Filled'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Z"/>
    </Icon>
  );
};

IconMaterialTvW100Filled.displayName = 'OnesyIconMaterialTvW100Filled';

export default IconMaterialTvW100Filled;
