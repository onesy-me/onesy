import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreUp = (props: IIcon) => {

  return (
    <Icon
      name='MoreUp'

      short_name='MoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-320v-360H320v-80h440v440h-80ZM480-120v-360H120v-80h440v440h-80Z"/>
    </Icon>
  );
};

IconMaterialMoreUp.displayName = 'OnesyIconMaterialMoreUp';

export default IconMaterialMoreUp;
