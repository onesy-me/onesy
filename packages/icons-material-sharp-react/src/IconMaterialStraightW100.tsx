import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightW100 = (props: IIcon) => {

  return (
    <Icon
      name='StraightW100'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-172v-564l-91 91-19-19 124-124 124 124-19 19-91-91v564h-28Z"/>
    </Icon>
  );
};

IconMaterialStraightW100.displayName = 'OnesyIconMaterialStraightW100';

export default IconMaterialStraightW100;
