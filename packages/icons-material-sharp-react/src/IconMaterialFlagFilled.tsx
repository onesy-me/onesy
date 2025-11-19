import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlagFilled'

      short_name='Flag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Z"/>
    </Icon>
  );
};

IconMaterialFlagFilled.displayName = 'OnesyIconMaterialFlagFilled';

export default IconMaterialFlagFilled;
