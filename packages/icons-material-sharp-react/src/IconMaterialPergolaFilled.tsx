import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPergolaFilled = (props: IIcon) => {

  return (
    <Icon
      name='PergolaFilled'

      short_name='Pergola'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-760h80v80h560v-80h80v760h-80v-440H200v440h-80Zm320 0v-120H320v-80h320v80H520v120h-80Z"/>
    </Icon>
  );
};

IconMaterialPergolaFilled.displayName = 'OnesyIconMaterialPergolaFilled';

export default IconMaterialPergolaFilled;
