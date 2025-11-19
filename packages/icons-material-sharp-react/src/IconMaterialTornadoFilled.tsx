import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTornadoFilled = (props: IIcon) => {

  return (
    <Icon
      name='TornadoFilled'

      short_name='Tornado'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-840h880L804-640H156L40-840Zm162 280h556l-70 120H272l-70-120Zm116 200h324L480-80 318-360Z"/>
    </Icon>
  );
};

IconMaterialTornadoFilled.displayName = 'OnesyIconMaterialTornadoFilled';

export default IconMaterialTornadoFilled;
