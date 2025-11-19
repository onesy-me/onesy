import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResponsiveLayoutFilled = (props: IIcon) => {

  return (
    <Icon
      name='ResponsiveLayoutFilled'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-120v-520H380v-200h460v720H640Zm-260 0v-440h180v440H380Zm-260 0v-440h180v440H120Z"/>
    </Icon>
  );
};

IconMaterialResponsiveLayoutFilled.displayName = 'OnesyIconMaterialResponsiveLayoutFilled';

export default IconMaterialResponsiveLayoutFilled;
