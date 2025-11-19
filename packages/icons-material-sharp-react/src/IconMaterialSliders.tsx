import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSliders = (props: IIcon) => {

  return (
    <Icon
      name='Sliders'

      short_name='Sliders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-360v-240h800v240H80Zm480-80h240v-80H560v80Z"/>
    </Icon>
  );
};

IconMaterialSliders.displayName = 'OnesyIconMaterialSliders';

export default IconMaterialSliders;
