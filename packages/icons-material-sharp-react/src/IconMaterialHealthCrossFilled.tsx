import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthCrossFilled = (props: IIcon) => {

  return (
    <Icon
      name='HealthCrossFilled'

      short_name='HealthCross'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-200H120v-320h200v-200h320v200h200v320H640v200H320Z"/>
    </Icon>
  );
};

IconMaterialHealthCrossFilled.displayName = 'OnesyIconMaterialHealthCrossFilled';

export default IconMaterialHealthCrossFilled;
