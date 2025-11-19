import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvW100 = (props: IIcon) => {

  return (
    <Icon
      name='TvW100'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-252q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H588v50q0 13-8.5 21.5T558-172H402q-13 0-21.5-8.5T372-202v-50H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialTvW100.displayName = 'OnesyIconMaterialTvW100';

export default IconMaterialTvW100;
