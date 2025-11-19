import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInFullFilled = (props: IIcon) => {

  return (
    <Icon
      name='OpenInFullFilled'

      short_name='OpenInFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"/>
    </Icon>
  );
};

IconMaterialOpenInFullFilled.displayName = 'OnesyIconMaterialOpenInFullFilled';

export default IconMaterialOpenInFullFilled;
